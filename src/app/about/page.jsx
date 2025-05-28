import React from 'react';


const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>О нашей компании</h1>
      </header>

      <section className="about-section">
        <div className="about-card">
          <h2>Наша история</h2>
          <p>
            Запущен в 2012 году, наш сайт призван упростить поиск нужного блюда. 
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Назначение</h3>
              <p>Быстрый поиск рецептов без лишней информации</p>
            </div>
            <div className="timeline-item">
              <h3>Идея</h3>
              <p>Помочь людям выбрать, что приготовить</p>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h2>Наши преимущества </h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Большой выбор</h3>
              <p>Огромная база различных рецептов</p>
            </div>
            <div className="value-item">
              <h3>Удобство</h3>
              <p>Наличие видео рецепта</p>
            </div>
            <div className="value-item">
              <h3>Поддержка</h3>
              <p>Наша поддержка ответит на ваши вопросы</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutPage;