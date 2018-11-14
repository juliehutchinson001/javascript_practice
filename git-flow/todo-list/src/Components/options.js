import React from 'react';

const Options = ({ items, addItemToList }) => {

    const itemsLis = items.map((item, index) => (
        <li key={ index }>
            <span>{ item }</span>
            <select onChange={ event => addItemToList(item, event.target.value) } >
                <option value='general'>General</option>
                <option value='list1'>List1</option>
                <option value='list2'>List2</option>
                <option value='list3'>List1</option>
                <option value='list4'>List2</option>
            </select>
        </li>
    ));

    return itemsLis;
};

export default Options;