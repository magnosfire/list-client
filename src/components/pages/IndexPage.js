import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import './indexPage.css'


const HomePage = ({ isAuthenticated, logout }) => (

    <div className="header">
        <div className="header-section">
            <div className="logo-container">

                <div className="menu-item"> 

                    <Link to="/">List Control</Link>
                </div>

            </div>
            
            <nav className="navigation-container">

                <div className="menu">

                    <div className="menu-item">
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/signup">Register</Link>
                    </div>

                </div>
                
            </nav>
            
        </div>
    </div>

);

HomePage.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);