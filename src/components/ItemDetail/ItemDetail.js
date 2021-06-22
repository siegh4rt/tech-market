import React from 'react';
import { Grid } from '@material-ui/core';

export default function ItemDetail(props) {
    const {image, title} = props;

    return (
        <Grid>
            <h1>{{title}}</h1>
            <div>
               {image}
            </div>
        </Grid>
    )
}