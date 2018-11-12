import React, { Fragment } from 'react';

const ListsContainer = ({ items, title }) => {
    const itemsLis = items.map((item, i) => <li key={ i }>{ item }</li>);
    return (
        <Fragment>
            <h1>{ title }</h1>
            <ul>
                { itemsLis }
            </ul>
        </Fragment>
    );
};

const Lists = () => (

);

export default ListsContainer;