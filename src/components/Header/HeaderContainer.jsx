import * as React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // - because crosdomen query (localhost: => samuraijs.api), we need send cookie with query
    //      we add second parameter 'withCredentials'.
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`
      // , {withCredentials: true}
      )
      .then(response => {
        // we use 'debugger' to see which data we get with response.
        // debugger
        if (response.data.resultCode === 0) {
          //  we already login in.
          let {id, login, email} = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      })
  }

  render() {

    return (
      <Header {...this.props}/>
    );

  }
};

let mapStateToProps = (state) => ({
  // return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  //   pageSize: state.usersPage.pageSize,
  //   totalUsersCount: state.usersPage.totalUsersCount,
  //   currentPage: state.usersPage.currentPage,
  //   isFetching: state.usersPage.isFetching
  // }
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
