import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1400,
    color: 'var(--myYellow)',
  },
}));

export default function CircularLoading(props) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={props.open} onClick={()=>props.homeMainEventControl().handleImageLoading().close()}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}