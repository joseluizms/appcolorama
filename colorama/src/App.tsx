import React, { useState } from 'react';
import './App.css';
import { getRandomColor } from './colors';

function App() {
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

    const handleChangeColor = () => {
        setBackgroundColor(getRandomColor());
    }

    return (
        <div style={{ backgroundColor }} className="app-container">
            <div className="hex-value">
                {backgroundColor}
            </div>
            <button className="change-color-button" onClick={handleChangeColor}>
                <img src={process.env.PUBLIC_URL + '/icon.png'} alt="ícone" width="32" />
                Mudar Cor
            </button>
        </div>
    );
}

export default App;
