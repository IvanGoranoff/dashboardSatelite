export const togglePower = (device) => {
    return {
        type: 'TOGGLE_POWER',
        payload: device
    };
};

export const updateVoltage = (voltage) => {
    return {
        type: 'UPDATE_VOLTAGE',
        payload: voltage
    };
};

export const updateCurrent = (current) => {
    return {
        type: 'UPDATE_CURRENT',
        payload: current
    };
};

export const addNotification = (notification) => {
    return {
        type: 'ADD_NOTIFICATION',
        payload: notification
    };
};
export const removeNotification = (index) => {
    return {
        type: 'REMOVE_NOTIFICATION',
        payload: index
    };
};
