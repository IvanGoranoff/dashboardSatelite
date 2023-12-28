import React from 'react';
import { useDispatch } from 'react-redux';
import { togglePower } from '../redux/actions/index';
import './styles/commandpanel.css';

function CommandPanel() {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(togglePower());
    };

    return (
        <div className="command-panel">
            <button onClick={handleToggle}>Toggle Power</button>
        </div>
    );
}

export default CommandPanel;
