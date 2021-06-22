import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar';
import Router from '../../Routes/Router'

const AppContent = () => {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Router/>
    </BrowserRouter>
  )
}

export default AppContent
