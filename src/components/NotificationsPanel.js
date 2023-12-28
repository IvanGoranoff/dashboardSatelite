import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../redux/actions';
import './styles/notificationspanel.css';

function NotificationsPanel() {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.notifications);

    const handleClose = (index) => {
        dispatch(removeNotification(index));
    };

    return (
        <div className="notifications-panel">
            <h2>Известия</h2>
            {notifications.map((note, index) => (
                <div key={index} className={`notification ${note.type}`}>
                    <span>{note.message}</span>
                    <button onClick={() => handleClose(index)} className="close-btn">✖</button>
                </div>
            ))}
        </div>
    );
}

export default NotificationsPanel;
