import React,{ Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from './components/User/Navigation';
import LandingPage from './components/User/Landing';
import SignUpPage from './components/User/SignUp';
import SignInPage from './components/User/SignIn';
import PasswordForgetPage from './components/User/PasswordForget';
import HomePage from './components/User/Home';
import AccountPage from './components/User/Account';
import * as routes from './constants/routes';

import './App.css';

class App extends Component {
    render () {
        return (
    <Router>
        <div className="app">
            <Navigation />

            <hr/>

            <Route exact path={routes.LANDING} component={() => <LandingPage />} />
            <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
            <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
            <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        </div>
    </Router>
    )}
}

export default App;