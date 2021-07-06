import React, {useState} from 'react'
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar'
import Router from '../../Routes/Router'
import {BrowserRouter} from 'react-router-dom';

const AppContent = () => {
    const [targeProduct, setTargetProduct] = useState('');

    function getTargetProduct(e) {
        const targetProductSelected = e;
        setTargetProduct(targetProductSelected);
    }

    return (
        <BrowserRouter>
            <SearchAppBar getTargetProduct={getTargetProduct}/>
            <Router targetProductSelected={targeProduct}/>
        </BrowserRouter>
    )
}


export default AppContent;