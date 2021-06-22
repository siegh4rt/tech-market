import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    '& div': {
      width: 200,
      marginLeft: 100,
      display: 'flex',
    }
  }
}));


export default function ItemCount(props) {
  const { quantity } = props
  const [count, setCount] = useState(1)
  const classes = useStyles();

  const operatorminus = () => {
    setCount((count) => (Math.max(count - 1, 1)))
  }

  const operatorplus = () => {
    setCount((count) => (Math.min(count + 1, quantity)))
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <div>
        <Button onClick={operatorminus}>-</Button>
        <div>{count}</div>
        <Button onClick={operatorplus}>+</Button>
      </div>
    </Grid>
  )
}