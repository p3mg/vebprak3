import React from 'react';


const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Контакты</h1>
      </header>

      <section className="about-section">

        <div className="about-card">
          <div className="values-grid">
            <div className="value-item">
              <h3>Номер телефона</h3>
              <p>+7 999 999 99 99</p>
            </div>
            <div className="value-item">
              <h3>Почта</h3>
              <p>111@gmail.com</p>
            </div>
            <div className="value-item">
              <h3>Telegram</h3>
              <p>afjfjaf/t.me</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutPage;