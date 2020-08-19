import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
// Imports from src
import ApiErrorMessage from '../../Forms/ApiErrorMessage';
import { IUserFormValues, LOGIN } from '../../../store/user/types';
import { login } from '../../../store/user/action';
import { selectError } from '../../../store/error/selectors';
import { selectLoader } from '../../../store/ui/selectors';
import ButtonIndicator from '../../Forms/ButtonIndicator';

const LoginForm = (): JSX.Element => {
    const dispatch = useDispatch();

    const submitting = useSelector(selectLoader(LOGIN));
    const apiErrors = useSelector(selectError(LOGIN));

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (userValues: IUserFormValues) => {
        dispatch(login(userValues));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            {/* Email input */}
            <div className="login-form__group">
                {/* Response error from api */}
                {apiErrors && <ApiErrorMessage apiErrors={apiErrors} />}

                <label htmlFor="email" className="input__label">
                    <input
                        id="email"
                        name="email"
                        ref={register({ required: 'This field is required' })}
                        className="input"
                        placeholder=""
                        type="email"
                    />
                    <span className="input__placeholder">Email</span>
                    <ErrorMessage
                        name="email"
                        errors={errors}
                        as={<p className="input__error" />}
                    />
                </label>
            </div>

            {/* Password input */}
            <div className="login-form__group">
                <label htmlFor="password" className="input__label">
                    <input
                        id="password"
                        name="password"
                        ref={register({ required: 'This field is required' })}
                        className="input"
                        placeholder=""
                        type="password"
                    />
                    <span className="input__placeholder">Password</span>
                    <ErrorMessage
                        name="password"
                        errors={errors}
                        as={<p className="input__error" />}
                    />
                </label>
            </div>

            {/* Remember me checkbox */}
            <div className="login-form__group">
                <input
                    id="remember"
                    name="rememberMe"
                    ref={register}
                    className="checkbox__input"
                    type="checkbox"
                />
                <label htmlFor="remember" className="checkbox__label">
                    <span className="checkbox__btn" />
                    Remember me
                </label>
            </div>

            {/* Buttons */}
            <button className="btn-submit" disabled={submitting} type="submit">
                {submitting ? <ButtonIndicator /> : 'Sign in'}
            </button>
            <button className="login-form__btn-register" type="button">
                Create an account
            </button>
            <button className="login-form__btn-lost-password" type="button">
                Lost your password?
            </button>

            {/* Empty block */}
            <span className="login-form__empty-block" />
        </form>
    );
};

export default LoginForm;
