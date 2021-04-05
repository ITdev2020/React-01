import {createSelector} from "reselect";


// getUsersSelector, primitiveSelector => getUsers
// selector - function which get all state,
// and return only what we need from state in our case (primitiveSelector).
const getUsersSelector = (state) => {
  return state.usersPage.users;
}

// 'users' - dependencies.
export const getUsers = createSelector(getUsersSelector,
  (users) => {
  // selectors logic, not selector. Selector is 'getUsers'.
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


// for example (difficult selector):
export const countSomethingDifficult = (state) => {
  // debugger ...maybe
  // for... math... big arrays etc.
  // ...
  // ...
  let count = 23;
  return count;
}

