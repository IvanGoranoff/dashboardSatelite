const initialState = {
    powerData: { voltage: 0, current: 0 },
    notifications: [],
    devicesStatus: {
        obc: true, // По подразбиране включен
        camera: true // По подразбиране  включена
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_POWER':
            return {
                ...state,
                devicesStatus: {
                    ...state.devicesStatus,
                    [action.payload]: !state.devicesStatus[action.payload]
                }
            };
        case 'UPDATE_VOLTAGE':
            return {
                ...state,
                powerData: { ...state.powerData, voltage: action.payload }
            };
        case 'UPDATE_CURRENT':
            return {
                ...state,
                powerData: { ...state.powerData, current: action.payload }
            };
        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                notifications: state.notifications.filter((_, index) => index !== action.payload)
            };

        case 'ADD_NOTIFICATION':
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            };
        default:
            return state;
    }
}

export default rootReducer;
