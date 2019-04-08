import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './Session/AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../../constants/routes';
import '../../styles/UserAccount.css';

const Navigation = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <nav className='nav-pills'>
        <Link className='btn btn-primary' style={{marginRight : "4px"}} to={routes.LANDING}>Landing</Link>
        <Link className='btn btn-primary' style={{marginRight : "4px"}} to={routes.HOME}>Home</Link>
        <Link className='btn btn-primary' style={{marginRight : "4px"}} to={routes.ACCOUNT}>Account</Link>
        <SignOutButton />
    </nav>

const NavigationNonAuth = () =>
    <div>   
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <Link to={routes.LANDING} class="navbar-brand">MusicApp</Link>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link to={routes.LANDING}>Home</Link></li>
    
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><Link to={routes.SIGN_UP}><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to={routes.SIGN_IN}><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
</div>

export default Navigation;
