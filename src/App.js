import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation'
import './app.css';


const App = ({ location, isAuthentifcated }) => (
  <div className="container">
    <GuestRoute location={location} path="/" exact component = { IndexPage } />
    <GuestRoute location={location} path="/login" exact component = { LoginPage }/>
    <GuestRoute location={location} path="/signup" exact component = { SignUpPage }/>
    <UserRoute location={location} path="/home" exact component = { HomePage }/>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthentifcated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
      isAuthentifcated: !!state.user.email
  }
}

export default connect(mapStateToProps)(App);
