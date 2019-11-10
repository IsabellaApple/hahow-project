import React from 'react';
export const snackBarInitState = { open: false };
export const loadingInitState = { loading: false };
export const GlobalContext = React.createContext({ open: false, loadingInitState });
