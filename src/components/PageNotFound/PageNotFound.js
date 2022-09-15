import { Link } from "react-router-dom";

function PageNotFound(){
  return(
    <div className="pagenotfound">
      <h2 className="pagenotfound__title">404</h2>
      <p className="pagenotfound__subtitle">Страница не найдена</p>
        <Link to="/" className="pagenotfound__link">Назад</Link>
    </div>
  )
};

export default PageNotFound;
