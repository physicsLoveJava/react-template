
const loginReducer = (state = false, action: any) => {
    switch (action.type) {
        case 'login':
            return !state;
        default:
            return state;
    }
}

export default loginReducer;