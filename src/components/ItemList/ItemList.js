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
    const [menuItems, setMenuItems] = useState([]);
    const [foodType, setFoodType] = useState('pasta');
    const [anchorEl, setAnchorEl] = useState(null);

    function getData() {
        axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${foodType}&number=50&apiKey=394b01c061234235b4ceb4971f7e6a55`)
            .then(response => setMenuItems(response.data.menuItems))
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        getData();
    }, [foodType])

    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setFoodType(e.currentTarget.innerText)
    };

    const changePageWithProductDetail = (idPage) => {
        const productDetail = menuItems.filter(idPage)
        console.log(productDetail)
        return <ItemDetail {...productDetail}/>
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
                    menuItems && menuItems.length &&
                    menuItems.map((product, i) => {
                        return <Item {...product} changePageWithProductDetail={changePageWithProductDetail}/>
                    })
                }
            </Grid>
            </>
        </div>
    )
}

export default ItemList