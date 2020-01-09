import React from 'react';
import { connect } from 'react-redux';
import TopNavigation from '../navigation/TopNavigation';
import ListDashboardComponent from '../list/ListDashboardComponent';
import PropTypes from 'prop-types';
import { fetchLists } from '../../actions/list';

class HomePage extends React.Component {

    state = {
        loading:true
    };

    render() {

        const { isConfirmed } = this.props;

        return(

            <div>

                <div>
                    <TopNavigation></TopNavigation>
                </div>
                
                <div>
                    <ListDashboardComponent></ListDashboardComponent>
                </div>

            </div>
        )
        
    }

}

HomePage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state, store) {
    return {
        isConfirmed: !!state.user.confirmed
    };
};

export default connect(mapStateToProps)(HomePage);