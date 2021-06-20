import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from '../Item/Item';

const useStyles = makeStyles({
    root: {
      marginTop:  50,
      '& div > div' : {
          margin: 10
      }
    }
})

const arr = [
    { productName: 'Hamburguer', price: '22000', description: 'Hamburguer description', quantity: 4 },
    { productName: 'frie wing chickes', price: '14000', description: 'frie wing chickens description', quantity: 4 },
    { productName: 'hot dog', price: '9000', description: 'hot dog', quantity: 4 },
    { productName: 'hawaian pizza', price: '30000', description: 'hawaian pizza', quantity: 4},
    { productName: 'Hamburguer', price: '22000', description: 'Hamburguer description', quantity: 4 },
    { productName: 'frie wing chickes', price: '14000', description: 'frie wing chickens description', quantity: 4 },
    { productName: 'hot dog', price: '9000', description: 'hot dog' },
    { productName: 'hawaian pizza', price: '30000', description: 'hawaian pizza' }
]

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            arr
        ), 2000)
    })
}

const ItemList = () => {
    const classes = useStyles();
    
    const [data, setData] = useState([]);

    const initialize = () => {
        getData().then(data => {
            setData(data)
        })
    }

    useEffect(() => {
        initialize();
    }, [])

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                spacing={5}
                className={classes.contentCard}
            >
                {data && data.length && data.map((product, i) => {
                    return <Item {...product} />
                })}
            </Grid>
        </div>
    )
}

export default ItemList