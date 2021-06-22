import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Button, Menu, MenuItem } from '@material-ui/core';
import axios from 'axios'
import Item from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';

const useStyles = makeStyles({
    root: {
        marginTop: 50,
        '& div > div': {
            margin: 10
        }
    }
})

const ItemList = () => {
    const [data, setData] = useState([]);
    //const [foodType, setFoodType] = useState('pasta');
    const [anchorEl, setAnchorEl] = useState(null);

    function getData() {
        axios.get(`https://api.artic.edu/api/v1/artworks`)
            .then(response => setData(response.data.data))
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        getData();
    }, [])

    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        //setFoodType(e.currentTarget.innerText)
    };

    const changePageWithProductDetail = (idPage) => {
        const itemDetail = data.filter(idPage)
        console.log(itemDetail)
        return <ItemDetail {...itemDetail}/>
    }

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
                    <MenuItem onClick={handleClose}>rice</MenuItem>
                    <MenuItem onClick={handleClose}>burger</MenuItem>
                    <MenuItem onClick={handleClose}>pasta</MenuItem>
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
                    data && data.length &&
                    data.map((item, i) => {
                        return <Item {...item} changePageWithProductDetail={changePageWithProductDetail}/>
                    })
                }
            </Grid>
            </>
        </div>
    )
}

export default ItemList