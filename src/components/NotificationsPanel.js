import React from 'react';
import { useSelector } from 'react-redux';
import './styles/notificationspanel.css';

function NotificationsPanel() {
    const notifications = useSelector(state => state.notifications);

    return (
        <div className="notifications-panel">
            {notifications.map((note, index) => (
                <p key={index}>{note}</p>
            ))}
        </div>
    );
}

export default NotificationsPanel;
