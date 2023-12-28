import React from 'react';
import { useDispatch } from 'react-redux';
import { togglePower } from '../redux/actions';

function CommandPanel() {
    const dispatch = useDispatch();

    // Функция за превключване
    const handleToggle = (device) => () => {
        dispatch(togglePower(device));
    };

    return (
        <div className="command-panel">
            <button onClick={handleToggle('obc')}>Toggle OBC Power</button>
            <button onClick={handleToggle('camera')}>Toggle Camera Power</button>
        </div>
    );
}

export default CommandPanel;
