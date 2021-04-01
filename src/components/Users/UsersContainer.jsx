import * as React from 'react';
import {
  follow,
  setCurrentPage,
  unfollow, toggleFollowingProgress, getUsers
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

  // - if constructor have only one method 'super', then we not need write constructor.
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // this.props.getUsersThunkCreator()

    // this.props.toggleIsFetching(true)
    //
    // // axios - request, from api.js
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false)
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // })
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)

    // this.props.setCurrentPage(pageNumber)
    // this.props.toggleIsFetching(true)
    //
    // // axios - request, from api.js
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false)
    //   this.props.setUsers(data.items);
    // })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}

      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
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



// compose order is not important
export default compose(
  // withLanguage,    // - for example
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
  })
)(UsersContainer)
