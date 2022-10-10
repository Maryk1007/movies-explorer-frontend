import React from "react";
import { useCallback, useEffect } from "react";

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}

const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const type = target.type;

    let error = target.validationMessage;
    if ((type === 'email') && (!isValidEmail(value))) {
      error = "неккоректное значение email";
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: error});
    setIsFormValid(target.closest("form").checkValidity());
  };

  useEffect(() => {
    if (isFormValid && Object.values(errors).every((el) => el.length === 0)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isFormValid, errors])

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
