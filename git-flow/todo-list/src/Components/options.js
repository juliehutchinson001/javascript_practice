import React from 'react';

const Bucket = ({ items, addItemToList }) => {

    const itemsLis = items.map((item, i) => (
        <li key={i}>
            <span>{item}</span>
            <select onChange={event => addItemToList(item, event.target.value)} >
                <option value='general'>General</option>
                <option value='list1'>List1</option>
                <option value='list2'>List2</option>
            </select>
        </li>
    ));

    return itemsLis;
};

export default Bucket;