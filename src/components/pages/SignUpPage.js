import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SignUpForm from "../forms/SignUpForm";
import { signup } from '../../actions/users'
import { login } from '../../actions/auth'

class SignUpPage extends React.Component {

    submit = data => 
        this.props.signup(data).then(() => this.props.history.push('/home'));

    render() {
        return (
            <div>
                <SignUpForm submit={this.submit}/>
            </div>
        );
    }
}

SignUpPage.protoType = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default  connect(null, { signup })(SignUpPage);