const initialState = {
    powerData: { voltage: 0, current: 0 },
    notifications: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_POWER':
            // Implement logic here
            return state;
        default:
            return state;
    }
}

export default rootReducer;
