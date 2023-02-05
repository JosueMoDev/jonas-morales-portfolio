
export const appReducer = (state, action) => {
    switch (action.type) {
        case 'toggleTheme':
            return { ...state, theme: action.payload.theme }
        case 'onIntroDone':
            return { ...state, isIntroDone: true }
        case 'onOpenSideBar':
            return {...state, isSideBarOpen:!state.isSideBarOpen }
        default:
            return state;
    }
}