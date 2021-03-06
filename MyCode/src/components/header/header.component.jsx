import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
            </Link>            
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser?
                    <div className="sign-out" onClick={() => auth.signOut()}>Sign Out</div>:
                    <Link to="/SignInAndSignUpPage">Sign In</Link>
                }
            </div>
        </div>
    )
}

export default Header;