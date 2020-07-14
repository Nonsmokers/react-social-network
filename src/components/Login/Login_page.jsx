import React from "react";
import s from './Login_page.module.css'
import {Field, reduxForm} from "redux-form";
import { input_form} from "../common/Form_controls/Forms_controls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";

let Login_form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field component={input_form} validate={[required]} name='email'
                       placeholder='email..'/>
            </div>
            <div>
                <Field component={input_form} validate={[required]} name='password'
                       type='password' placeholder={'password..'}/>
            </div>
            <div>
                <div className={s.remember}>
                    <Field component={input_form} name={'remember_me'} type={'checkbox'}/>
                    <span>Remember me</span>
                </div>
            </div>
            <div>
                <button> Login</button>
            </div>
            {props.error && <div className={s.error}>
                {props.error}
            </div>}
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
    form: 'login',
})(Login_form)


let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.is_auth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={s.wrapper}>
        <h1 className={s.tittle}>Login</h1>
        <div className={s.form_wrapper}>
            <Login_form_redux onSubmit={onSubmit}/>
        </div>
    </div>
}
const mapStateToProps = (state) => ({
    is_auth: state.auth.is_auth
})

export default connect(mapStateToProps, {login})(Login);