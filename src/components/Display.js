import React from 'react';
import { useSelector } from 'react-redux';
import './styles/display.css';

function Display() {
    const { voltage, current } = useSelector(state => state.powerData);
    const devicesStatus = useSelector(state => state.devicesStatus);

    return (
        <div className="display">
            <h2>Състояние на захранването</h2>
            <p>Напрежение: {voltage.toFixed(2)}V</p>
            <p>Ток: {current.toFixed(2)}A</p>
            <h3>Състояние на устройствата:</h3>
            <p>OBC: {devicesStatus?.obc ? 'Включен' : 'Изключен'}</p>
            <p>Камера: {devicesStatus?.camera ? 'Включена' : 'Изключена'}</p>
        </div>
    );
}


export default Display;
