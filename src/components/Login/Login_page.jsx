import React from "react";
import s from './Login_page.module.css'
import {Field, reduxForm} from "redux-form";

let Login_form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form_wrapper}>
            <div>
                <Field component={'input'} name={'login'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} name={'remember_me'} type={'checkbox'}/>
            </div>
            <div>
                <button> Login</button>
            </div>
            <div>
                <span>Forgot</span>
                <a>Username / Password?</a>
            </div>
            <div>
                <a> Create your Account </a>
            </div>
        </form>
    )
}

const Login_form_redux = reduxForm({
    form: 'Login',
})(Login_form)


let Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <Login_form_redux onSubmit={onSubmit}/>
    </div>
}

export default Login;