import * as React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentPage}&count=${this.props.pageSize}`)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })

  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  };
};
// if arrow function return object '{}', we must wrap curly brackets in round brackets:
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
