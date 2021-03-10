const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
  users: [

  ]
}

// if state not defined (on start), then state = initialState.
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })

        /* - this line is identical:
        users: [...state.users]
        users: state.users.map( u => u )
        - but we don't should copy all array. Only elements, which we want change.
        */

      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })

        /* - this line is identical:
        users: [...state.users]
        users: state.users.map( u => u )
        - but we don't should copy all array. Only elements, which we want change.
        */

      }

    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    // return { ...state, users: action.users }

    default:
      return state;

  }

}

//ActionCreator - AC
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
// users - we give, maybe from server, later. And fill our state.
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;