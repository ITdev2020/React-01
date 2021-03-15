const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
  users: [ ],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1
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
      return {...state, users: action.users}
    // return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count}

    default:
      return state;

  }

}

//ActionCreator - AC
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
// users - we give, maybe from server, later. And fill our state.
export const setUsersAC = (users) => ({type: SET_USERS, users})
//-if we create object and properties name is same this properties variable name (currentPage: currentPage),
//    we do not need write properties name.
// export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})


export default usersReducer;