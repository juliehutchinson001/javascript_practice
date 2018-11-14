import React, { Fragment } from 'react';
import Bucket from './options';

const ListsContainer = ({ lists, addItemToList }) => {

    const buckets = Object.keys(lists).map((listName, i) => (
        <Fragment>
            <h1 key={i}>{listName}</h1>
            <ul key={i}>
                <Bucket
                    items={lists[listName]}
                    addItemToList={addItemToList}
                />
            </ul>
        </Fragment>
    ));

    return buckets;
};

export default ListsContainer;