import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';

export default function ItemListContainer(props) {
    const {targetProductSelected} = props
    const [data, setData] = useState([]);

    function getData() {
        axios.get(`http://localhost:8081/api/tasks`)
            .then(response => setData(response.data))
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        getData();
    }, [data])

    return(
        <ItemList
            data={data}
            targetProductSelected={targetProductSelected}
        />
    )
}
