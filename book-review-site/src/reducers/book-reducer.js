const bookReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD':
        default:
            Array(state).push(action.payload);
    }

    return state;
}

export default bookReducer;