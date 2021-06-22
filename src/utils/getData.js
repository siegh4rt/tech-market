import axios from 'axios';
import React, {useState} from 'react';


const [menuItems, setMenuItems] = useState([]);

export function getData() {
    axios.get('https://api.spoonacular.com/food/menuItems/search?query=pasta&number=50&apiKey=394b01c061234235b4ceb4971f7e6a55')
    .then(response => setMenuItems(response.data.menuItems))
    .catch(err => {
        console.error(err);
    });
}