import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
    <div>
        <h1>SignIn</h1>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
    </div>

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form className='form-group' onSubmit={this.onSubmit}>
                <input
                    value={email}
                    className = 'form-control'
                    onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <br />
                <input
                className = 'form-control'
                    value={password}
                    onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <button className="btn btn-primary btn-group-toggle" disabled={isInvalid} type="submit">
                    Sign In
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};
