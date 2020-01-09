import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function rand(){
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

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

function ListItemComponent({listItem}) {

    const classes = useStyles();
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);
        const [show, toggleShow] = React.useState(true);


    const handleOpen = () => {
        console.log('open');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ab = () => {
        toggleShow(false);
    }

    return (

        

        <div>

        
            <div data-id={listItem.id} onClick={handleOpen.bind(this)}>

                {listItem.title}

            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper2} md={2} sm={3} xs={12}>

                    <h2 id="simple-modal-title">{listItem.title}</h2>

                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>

                </div>
            </Modal>

        </div>

        

    )

}

export default ListItemComponent;