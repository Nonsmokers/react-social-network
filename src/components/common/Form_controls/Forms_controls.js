import React from "react";
import s from "./Form_controls.module.css";

const Form_control = ({input, meta,child, ...props}) => {
    const has_error = meta.touched && meta.error
    return (
        <div className={s.form_control + ' ' + (has_error ? s.error : ' ')}>
            <div>
                {props.children}
            </div>
            {has_error && <span>{meta.error}</span>}
        </div>
    )
};

export const textarea_form = (props) => {
    const {input, meta,child, ...restProps} = props;
    return <Form_control {...props}><textarea {...input} {...restProps}/></Form_control>
};

export const input_form = (props) => {
    const {input, meta,child, ...restProps} = props;
    return <Form_control {...props}><input {...input} {...restProps}/></Form_control>
};
