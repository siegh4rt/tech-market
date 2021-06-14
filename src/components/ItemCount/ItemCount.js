import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2)
    },
}));

export default function ItemCount() {
    const [count, setCount] = useState(0)
    const classes = useStyles();

 return (
   <Grid container className={classes.root} spacing={2}>
    <Button onClick={() => setCount(count - 1)}>-</Button>
    <div>{count}</div>
    <Button onClick={() => setCount(count + 1)}>+</Button>
   </Grid>
 )
}