import {createSelector} from "reselect";


// getUsers, primitiveSelector => getUsersSelector   or   getUsersSuper
// selector - function which get all state, and return only what we need from state in our case.
const getUsersSelector = (state) => {
  return state.usersPage.users;
}

// 'users' - 'createSelector' dependencies.
export const getUsers = createSelector(getUsersSelector,
  (users) => {
  // selectors logic, not selector. Selector is 'getUsersSuper'.
  // getUsers().filter(u => true);
  return users.filter(u => true);
})



export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
}


// for example:
export const countSomethingDifficult = (state) => {
  // debugger ...maybe
  // for... math... big arrays etc.
  // ...
  // ...
  let count = 23;
  return count;
}

