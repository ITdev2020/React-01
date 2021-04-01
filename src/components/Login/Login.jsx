import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/*// Field - component from redux-form*/}
        <Field placeholder={"Email"} name={'email'}
               validate={[required]}
               component={Input}/>
      </div>
      <div>
        {/*// 'name=' - form properties*/}
        <Field placeholder={"Password"} name={'password'} type={'password'}
               validate={[required]}
               component={Input}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={"checkbox"}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}


// HOC - high order component
const LoginReduxForm = reduxForm ({
  // a unique name for the form
  form: 'login'
}) (LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    // console.log(formData)
    // props.login - is NOT thunkCreator {login},
    // Is other function, callback which inside is dispatch thunkCreator {login}.
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

// {login} - thunkCreator
// export default connect (null, {login}) (Login);
export default connect (mapStateToProps, {login}) (Login);
