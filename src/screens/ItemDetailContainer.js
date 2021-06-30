import React, {useEffect, useState} from 'react'
import { Grid, Button } from '@material-ui/core/';
import { useHistory} from 'react-router';
import axios from 'axios';

const ItemDetailContainer = (props) => {

    const history = useHistory();

    if (props.match.params && props.match.params.name) {
        return (
            <div>
            <Grid container>
                <Button onClick={e => history.push('/')}>Back</Button>
                <Grid item>
                </Grid>
                <Grid item>
                   description product
                </Grid>
            </Grid>
        </div>
        )
    }
}

export default ItemDetailContainer


