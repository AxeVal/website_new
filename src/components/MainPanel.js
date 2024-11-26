import { Link } from 'react-router-dom';

function MainPanel(){
    return(
        <div class="main">
            <div class="panels">
                <div class="panel" id="test">
                    <Link to="/MainPanel" className="button-link">
                        Test your knowlage
                    </Link>
                </div>

                <div class="panel" id="train">
                    <Link to="/ContentPanel" className="button-link">
                        Become clever
                    </Link>
                </div>
            </div>

            <div class="name">
                <h2>Ресурс для изучения английского языка с подбором заданий при помощи нейронной сети</h2>
                <h3>В последние годы нейронные сети стали важным инструментом в области обучения языкам. Эти технологии, вдохновленные работой человеческого мозга, позволяют создавать адаптивные и персонализируемые методы обучения, которые могут значительно улучшить процесс изучения английского языка.
                </h3>
            </div>

            <br></br>
            
            <img class="books" src="self-study.png" alt="english books" width="600px" height="400px"></img>
        </div>
    )
}

export default MainPanel;