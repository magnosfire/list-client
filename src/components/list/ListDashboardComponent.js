import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ListComponent from './ListComponent'
import { fetchLists } from '../../actions/list';

class ListDashboard extends React.Component {


    state = {
        lists: null,
    };
    
    componentDidMount() {

        this.onInit(this.props);

    };

    onInit(props) {

        props.fetchLists()

    };

    render() {

        const { lists } = this.props;

        if(!lists) {

            return (
                <div>LOADING</div>
            )
            
        }

        return(

            <Grid  container>

                {lists.map((list, key) => 

                    <ListComponent list={list} key={key} ></ListComponent>

                )}

            </Grid>

        )
        
    }
}

ListDashboard.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    fetchLists: PropTypes.func.isRequired
};

function mapStateToProps(state, store) {
    return {
        isConfirmed: !!state.user.confirmed,
        lists: state.lists.lists
    };
};

export default connect(mapStateToProps, { fetchLists })(ListDashboard);