import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const useStyles = makeStyles((theme) => ({
    cart: {
        color: '#fff',
        marginLeft: theme.spacing(2)
    }
}))

export const CardWidget = () => {
    const classes = useStyles();
    return (
        <a className={classes.cart} href="#">
            <ShoppingBasketOutlinedIcon/>
        </a>
    )
}