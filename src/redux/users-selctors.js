// selector - function which get all state, and return only what we need from state in our case.
export const getUsers = (state) => {
  // return state.usersPage.users;
  // for example. Create new array. If we have new array(or object) - then redraw presentation component.
  return state.usersPage.users.filter(u => true);
}

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

