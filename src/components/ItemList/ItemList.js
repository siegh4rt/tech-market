import React from 'react';
import {Item} from '../Item/Item';
import axios from 'axios';

async function makeGetRequest() {
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
    let data = res.data;
    console.log(data)
    return data
    
  }
  


export default function ItemList () {
    const data = makeGetRequest()
    return (
        data && data.map((item, i) => <Item data={item} index={i}/>)
    )
}