
export const appReducer = (state, action) => {
    switch (action.type) {
        case 'toggleTheme':
            return { ...state, theme: action.payload.theme }
        case 'onIntroDone':
            return { ...state, isIntroDone: true }
        case 'onToggleDrawer':
            return {...state, isDrawerOpen:!state.isDrawerOpen }
        default:
            return state;
    }
}