export const SNACKBAR_REDUCER = (state, action) => {
    switch (action.type) {
        case 'SUCCESS_SNACKBAR':
            return Object.assign({}, state.snackbarState, action);
        default:
            return { ...state, SnackbarState: 'OOPS! Something wrong, please refresh your page.' };
    }
};

export const LOADING_REDUCER = (state, action) => {
    return Object.assign({}, state.loading, action);
};