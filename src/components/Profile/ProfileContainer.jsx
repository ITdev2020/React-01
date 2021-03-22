import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    // if user is not authorized, then redirect to login page:
    // alert(this.props.isAuth);
    // if (this.props.isAuth === false) return <Redirect to='/login'/>;

    // if we need comparing boolean with boolean value, then can write short:
    // if (!this.props.isAuth) return <Redirect to='/login'/>;

    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  };
};
// if arrow function return object '{}', we must wrap curly brackets in round brackets:
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
