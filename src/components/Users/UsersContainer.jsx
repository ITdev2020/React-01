import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
  unfollow, toggleFollowingProgress
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import * as React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

  // - if constructor have only one method 'super', then we not need write constructor.
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.toggleIsFetching(true)

    // axios - request, from api.js
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)

    // axios - request, from api.js
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items);
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      {/*{this.props.isFetching ? <img src={preloader}/> : null}*/}

      {/*
      {this.props.isFetching ?
        <div style={ { backgroundColor: 'white'} }>
        <img src={preloader} />
        </div> : null}
        */}

      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             toggleFollowingProgress={this.props.toggleFollowingProgress}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

/*
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      //dispatch, action - simple object which have a minimum one properties, 'type'.
      //we dispatch not a AC (Action Creator), we dispatch a call of AC.
      //AC return 'action object', and we dispatching this object.
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
}
 */

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
})(UsersContainer);