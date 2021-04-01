import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false
}

// if state not defined (on start), then state = initialState.
const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        // '...' - we destructurized.
        ...action.payload
      }
    default:
      return state;
  }
}

//ActionCreator - AC
export const setAuthUserData = (userId, email, login, isAuth) => ( {
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
} )

//thunkCreator
export const getAuthUserData = () => (dispatch) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        //  we already login in.
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
}

//thunkCreator - return "thunk". "thunk" - function, which get method "dispatch"
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        //  we already login in.
        dispatch(getAuthUserData());
      } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
          dispatch(stopSubmit('login', {_error: message}));
      }
    })
}

//thunkCreator - return "thunk". "thunk" - function, which get method "dispatch"
export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        //  we already logout.
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}


export default authReducer;
