import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  // followingInProgress: [15849, 15848]
  followingInProgress: []
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
      }

    case SET_USERS:
      return {...state, users: action.users}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count}

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      // 64, 17:30
      return {
        ...state,
        followingInProgress: action.isFetching
          ?
          // if 'followingInProgress: action.isFetching' - true:
          // '...' - destructuring
          [...state.followingInProgress, action.userId]
          :
          // if 'followingInProgress: action.isFetching' - false:
          // destructuring not need, because 'filter' is making new array.
          state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state;

  }

}

//ActionCreator - AC
export const followSaccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSaccess = (userId) => ({type: UNFOLLOW, userId})
// users - we give, maybe from server, later. And fill our state.
export const setUsers = (users) => ({type: SET_USERS, users})
//-if we create object and properties name is same this properties variable name (currentPage: currentPage),
//    we do not need write properties name.
// export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

//thunk. ThunkCreator
// export const getUsersThunkCreator = (currentPage, pageSize) => {
export const requestUsers = (page, pageSize) => {

  return (dispatch) => {
    // toggleIsFetching - actionCreator
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    // axios - request, from api.js
    usersAPI.getUsers(page, pageSize).then(data => {

      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }

}

export const follow = (userId) => {

  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSaccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }

}

export const unfollow = (userId) => {

  return (dispatch) => {
    // toggleIsFetching - actionCreator
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSaccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }

}


export default usersReducer;