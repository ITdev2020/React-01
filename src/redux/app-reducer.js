import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
}

// if state not defined (on start), then state = initialState.
const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

//ActionCreator - AC
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//thunkCreator - return "thunk". "thunk" - function, which get method "dispatch"
export const initializeApp = () => (dispatch) => {
  // dispatch - is asynchronous
  let promise = dispatch(getAuthUserData());
  debugger
  // dispatch(somethingelse());
  // dispatch(somethingelse());

  // promise.then(() => {
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    });
}

export default appReducer;
