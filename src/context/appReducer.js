
export const appReducer = (state, action) => {
    switch (action.type) {
        case 'toggleTheme':
            return { ...state, theme: action.payload.theme }
        case 'onIntroDone':
            return {...state, isIntroDone: true }
        default:
            return state;
    }
}