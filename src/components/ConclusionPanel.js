import React from 'react';

const ConclusionPanel = () => {
    return (
        <div className="conc">
            <h1>Разработка в процессе</h1>
            <p>
                На данный момент есть:
                <ul>
                    <li>
                        План разработки и написания диплома
                    </li>
                    <li>
                        Изучение обучающих материалов
                    </li>
                    <li>
                        Поиск датасета
                    </li>
                    <li>
                        Написание диплома
                    </li>
                </ul>
                <a href="https://docs.google.com/document/d/1dEQsKcPIPR7IIuoWS3T6wft8lAIqpWdF2QbYxP6rJYY/edit?usp=sharing" target="_blank">Онлайн документ</a> <span style={{ color: 'red' }}></span>
            </p>
            <img src={`${process.env.PUBLIC_URL}/in-work.jpg`} alt="Ведутся работы" width="50%" />
        </div>
    );
};

export default ConclusionPanel;
