import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Box, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { newItemList } from '../../actions/list';
import ListItem from './ListItemComponent';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto'
    },
    list: {
        margin:  theme.spacing(2)
    },
    paper2: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }
  }));

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        newItemList({item: this.state.value});

    }

    handleOpen = () => {

        this.setState({show: !this.state.show});

    };

    handleClose = () => {

        
        
    };
    
    render() {

        const { list } = this.props;
        const { show, input } = this.state;

        return(

            <Grid item md={2} sm={3} xs={12}>

                <Paper>

                    <Box display="flex" p={0} style={{backgroundColor:'#c1c1c1'}}>

                        <Box order={1} flexGrow={1}>
                            {list.list.title}
                        </Box>
                        <Box order={2} onClick={this.handleOpen} >
                            {show ? '' : 'Add'}
                        </Box>

                        
                    </Box>

                    <Grid>

                        {list.listItems.map((listItem, i) =>

                            <ListItem listItem={listItem} key={i}></ListItem>

                        )}

                        
                    </Grid>
                    
                    { show && 
                    
                        <Box display="flex" p={0} style={{backgroundColor:'#c1c1c1'}}>

                            <form onSubmit={this.handleSubmit}>
                                <label>
                                Nome:
                                <input type="text" value={this.state.value  || ''} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Enviar" />
                            </form>

                        </Box> 
                    }
                    
                </Paper>


            </Grid>

        )
        
    }
}

ListComponent.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    fetchLists: PropTypes.func.isRequired
};

function mapStateToProps(state, store) {
    return {
        isConfirmed: !!state.user.confirmed
    };
};

export default connect(mapStateToProps)(ListComponent);