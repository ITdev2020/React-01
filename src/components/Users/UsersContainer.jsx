// import React from "react";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      //dispatch, action - simple object which have a minimum one properties, 'type'.
      dispatch( followAC(userId) )
    },
    unfollow: (userId) => {
      dispatch( unfollowAC(userId) )
    },
    setUsers: (users) => {
      dispatch( setUsersAC(users) )
    },
    setCurrentPage: (pageNumber) => {
      dispatch( setCurrentPageAC(pageNumber) )
    },
    setTotalUsersCount: (totalCount) => {
      dispatch( setUsersTotalCountAC(totalCount) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);