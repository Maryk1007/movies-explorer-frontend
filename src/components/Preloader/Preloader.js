import React from 'react'

const Preloader = ({isLoading}) => {
    return (
        <div className={`preloader_type_hidden ${isLoading ? 'preloader' : ''}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
