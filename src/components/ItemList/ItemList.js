import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
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
    const { data, targetProductSelected } = props;
    const [filter, setFilter] = useState("")
    const classes = useStyles();

    const filterProducts = data => {
       return  filter !== '' ? data.filter(product => product.category === filter) : data
    }

    useEffect(()=> {
        setFilter(targetProductSelected)
    }, [data, targetProductSelected])

    return (
        <div className={classes.root}>
            <>
               <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={5}
                    className={classes.contentCard}
                >
                    {
                        data.products && data.products.length &&
                        filterProducts(data.products).map((item, i) => {
                            return <Item {...item} key={i} />
                        })
                    }
                </Grid>
            </>
        </div>
    )
}

export default ItemList