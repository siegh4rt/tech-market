import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const data = [
    {
        name: 'televisor',
        quantity: 4
    }
]

export default function ItemListContainer() {
    return <ItemCount  data={data}/>
}
