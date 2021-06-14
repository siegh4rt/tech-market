import React from 'react';
import SearchAppBar from './appBar/SearchAppBar'
import ItemListContainer from './ItemListContainer/ItemListContainer';

export const Content = () => {
    return (
        <>
            <SearchAppBar />
            <section>
                <ItemListContainer/>
            </section>
        </>
    )
}