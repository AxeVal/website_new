import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function ApiPanel() {
    return (
        <div className="api-panel">
            <h3>Документация API</h3>
            <div className="swagger-ui-container">
                <SwaggerUI url="http://127.0.0.1:8000/openapi.json" />
            </div>
        </div>
    );
};

export default ApiPanel;
