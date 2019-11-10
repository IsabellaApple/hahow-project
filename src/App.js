import React, { useReducer } from 'react';
import './App.css';

// router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// component
import HereList from './components/HeroList/HeroList';
import SnackbarComponent from './components/Common/snackbar';
// hook
import { SNACKBAR_REDUCER, LOADING_REDUCER } from './hooks/GlobalHook/globalReducer';
import { GlobalContext, snackBarInitState, loadingInitState } from './hooks/GlobalHook/globalContext';
// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {

const [snackbarState, snackbarStateDispatch] = useReducer(SNACKBAR_REDUCER, snackBarInitState);  
const [loadingState, loadingStateDispatch] = useReducer(LOADING_REDUCER, loadingInitState);  

  return (
    <GlobalContext.Provider value={{snackbarState, snackbarStateDispatch,loadingState, loadingStateDispatch}}>
      <Router>
        <div className="App">
          <SnackbarComponent />
          <Switch>
            <Route exact path="/" component={HereList} />
            <Route exact path="/heroes" component={HereList} />
            <Route exact path="/heroes/:heroId" component={HereList} />
          </Switch>
        </div>
        <div className={`loading ${loadingState.loading ? 'on' : ''}`}>
        <CircularProgress className="center-VH" />
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
