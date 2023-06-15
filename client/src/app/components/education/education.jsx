const Education = () => {
  return (
    <>
      <div className="education dark">
        <div className="education__header">
          <h1>Opleiding</h1>
        </div>
        <div className="education__body">
          <div className="education__body__card">
            <div className="education__body__card__header">
              <h2>Arteveldehogeschool</h2>
            </div>
            <div className="education__body__card__body">
              <h3>Graduaat Programmeren</h3>
              <p>2 jarige opleiding</p>
              <p>
                Tijdens het Graduaat Programmeren leer je het zichtbare
                (front-end) en onzichtbare (backend) deel van web- en mobiele
                toepassingen ontwikkelen. Je wordt specialist in JavaScript,
                HTML, CSS en vult jouw skills aan met o.a. PHP, Python, UI/UX.
                Naast deze technische kant, vergaar je ook algemene ICT-skills.
                Je leert ook hoe digital agencies werken en wat jouw rol
                hierbinnen zal zijn. Na deze opleiding kan je aan de slag als
                front-end developer, full-stack JavaScript developer, PHP
                developer, Web Designer + Coder of CMS Themer.
              </p>
              <div className="education-info">
                <div className="education-info__item">
                  <p>lestaal: Nederlands</p>
                </div>
                <div className="education-info__item">
                  <p>Campus: Leeuwstraat</p>
                </div>
                <div className="education-info__item">
                  <a href="https://www.arteveldehogeschool.be/nl/opleidingen/graduaat/programmeren#alles">
                    Meer info
                  </a>
                </div>
              </div>

              <button className="education-cta">Start je inschrijving</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Education };
