import React from 'react'
import {makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import ItemCount from '../ItemCount/ItemCount';

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
    const { title, thumbnail:{lqip}, quantity, id, artist_display, changePageWithProductDetail } = props;

    return (
        <Card className={classes.root} key={id}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={lqip}
                    title="product image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        artist: {artist_display}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <ItemCount quantity={quantity} />
            <CardActions className={classes.contentButtons}>
                <Button onClick={()=>changePageWithProductDetail(id)}>
                    See more
                </Button>
            </CardActions>
        </Card>
    )
}

export default Item