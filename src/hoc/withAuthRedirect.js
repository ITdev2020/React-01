import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})


// HOC - High Order Component (not component, but function):
export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
  // if user is not authorized, then redirect to login page:
  // alert(this.props.isAuth);
  // if (this.props.isAuth === false) return <Redirect to='/login'/>;

  // if we need comparing boolean with boolean value, then can write short:
      if (!this.props.isAuth) return <Redirect to='/login'/>;
  return <Component {...this.props}/>
    }
  }

  // wrapping 'RedirectComponent'
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);



  return ConnectedAuthRedirectComponent
}
// ^^^^^
