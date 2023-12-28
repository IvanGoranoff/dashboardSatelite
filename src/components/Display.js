import React from 'react';
import { useSelector } from 'react-redux';
import './styles/display.css';

function Display() {
    const { voltage, current } = useSelector(state => state.powerData);
    const devicesStatus = useSelector(state => state.devicesStatus);

    return (
        <div className="display-panel">
            <div className="data-display">
                <label htmlFor="voltage-meter">Voltage:</label>
                <div className="meter-container">
                    <meter id="voltage-meter" value={voltage} min="0" max="30"></meter>
                    <span className="meter-value" style={{ marginLeft: '10px' }}>{voltage.toFixed(2)}V  </span>
                </div>
            </div>
            <div className="data-display">
                <label htmlFor="current-meter">Current:</label>
                <div className="meter-container">
                    <meter id="current-meter" value={current} min="0" max="3"></meter>
                    <span className="meter-value" style={{ marginLeft: '10px' }}>{current.toFixed(2)}A  </span>
                </div>
            </div>
            <div className="device-status">
                <p>OBC: {devicesStatus?.obc ? 'On' : 'Off'}</p>
                <p>Camera: {devicesStatus?.camera ? 'On' : 'Offа'}</p>
            </div>
        </div>
    );
}

export default Display;
