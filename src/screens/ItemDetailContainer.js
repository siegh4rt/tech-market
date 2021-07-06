import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core/';
import { makeStyles, Typography, CardMedia } from '@material-ui/core';
import { useHistory, useParams, useLocation } from 'react-router';
import ItemCount from '../components/ItemCount/ItemCount';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        width: '100%',

    },
    image: {
       width: 500,
       height: 500
    }
});


const ItemDetailContainer = (props) => {
    const classes  = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    let { data } = location.state || {};
    const [productDetail, setProductDetail] = useState(data);

    useEffect(() => {
        !data &&
            axios.get(`http://localhost:8081/api/tasks/${id}`)
                .then(setProductDetail)
    }, [])

    const {name, description, price, quantity, typeQuantity, image} = productDetail

    return (
        <>
            {productDetail && <div container className={classes.root}>
                <Button onClick={e => history.push('/')}>Back</Button>
                <Grid container>
                    <Grid item xs={6}>
                        <CardMedia
                            image={image}
                            title="Live from space album cover"
                            className={classes.image}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            {name}
                        </Typography>
                        <Typography>
                            {description}
                        </Typography>
                        <Typography>
                            {price}
                        </Typography>
                        <Grid>
                            <ItemCount
                                quantity={quantity}
                                typeQuantity={typeQuantity}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            }
        </>
    )
}





export default ItemDetailContainer;


