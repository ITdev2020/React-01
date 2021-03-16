const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false
  // isFetching: false
}

// if state not defined (on start), then state = initialState.
const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        // '...' - we destructurized.
        ...action.data,
        isAuth: true
      }

    default:
      return state;

  }

}

//ActionCreator - AC
export const setAuthUserData = (userId, email, login) => ( {type: SET_USER_DATA, data: {userId, email, login}} )

export default authReducer;