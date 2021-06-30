import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Button, Menu, MenuItem } from '@material-ui/core';
import Item from '../Item/Item';


const useStyles = makeStyles({
    root: {
        marginTop: 50,
        '& div > div': {
            margin: 10
        }
    }
})

const ItemList = (props) => {
    const { data } = props
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <>
                <Grid>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Open Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>129884</MenuItem>
                    </Menu>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={5}
                    className={classes.contentCard}
                >
                    {
                        data.products && data.products.length &&
                        data.products.map((item, i) => {
                            return <Item {...item} />
                        })
                    }
                </Grid>
            </>
        </div>
    )
}

export default ItemList