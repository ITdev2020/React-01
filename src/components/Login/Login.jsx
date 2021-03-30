import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/*<input placeholder={"Login"}/>*/}
        {/*// Field - component from redux-form*/}
        <Field placeholder={"Login"} name={'login'} component={'input'}/>
      </div>
      <div>
        {/*// 'name=' - form properties*/}
        <Field placeholder={"Password"} name={'password'} component={'input'}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> remember me
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
    console.log(formData)
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

export default Login;