import React from 'react'
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    contentButtons: {
        justifyContent: 'space-between'
    },
    media: {
        height: 140
    }
});

const Item = props => {
    const classes = useStyles();
    const { name, image, quantity, typeQuantity, price, description, category, id } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Link
                    to={{
                        pathname: `/${id}`,
                        state: {
                            data: props
                        }
                    }}
                >
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="product image"
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h6">
                        {category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h6">
                        {description}
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <ItemCount
                quantity={quantity}
                typeQuantity={typeQuantity}
            />
            <CardActions className={classes.contentButtons}>
                <Button variant="contained">
                    Add to car
                </Button>
            </CardActions>
        </Card>
    )
}

export default Item