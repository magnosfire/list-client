import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const TopNavigation = ({ user, logout }) => (
    <Menu secondary pointing>

        <Menu.Item as={Link} to="/dashboard">ListControl</Menu.Item>

        <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={"https://rescdn.imtxwy.com/ro/roeu/images/jp-2.png?v3"} />}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>
        </Menu.Menu>

    </Menu>
);

TopNavigation.protoTypes = {
    user: PropTypes.shape({
        email:PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logout } )(TopNavigation);