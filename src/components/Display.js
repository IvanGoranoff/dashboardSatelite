import React from 'react';
import { useSelector } from 'react-redux';
import './styles/display.css';

function Display() {
    const { voltage, current } = useSelector(state => state.powerData);

    return (
        <div className="display">
            <h2>Power Module Status</h2>
            <p>Voltage: {voltage}V</p>
            <p>Current: {current}A</p>
        </div>
    );
}

export default Display;
