import React from 'react'
import {Item} from '../Item/Item'

function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => data)

    return data
}


export default function ItemList () {
    const data = getData()
    return (
        data && data.map((item, i) => <Item data={item} index={i}/>)
    )
}