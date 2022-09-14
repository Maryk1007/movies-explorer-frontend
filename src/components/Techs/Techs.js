import React from "react";

function Techs() {
  return (
      <section className="techs">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__wrap">
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__grid">
          <p className="techs__grid_subtitle">HTML</p>
          <p className="techs__grid_subtitle">CSS</p>
          <p className="techs__grid_subtitle">JS</p>
          <p className="techs__grid_subtitle">React</p>
          <p className="techs__grid_subtitle">Git</p>
          <p className="techs__grid_subtitle">Express.js</p>
          <p className="techs__grid_subtitle">mongoDB</p>
        </div>
      </section>
  );
}

export default Techs;
