import React from 'react';

const Options = ({ items, addItemToList }) => {

    const itemsLis = items.map((item, index) => (
        <li className='options__todo' key={ index }>
            <span>{ item }</span>
            <select
                className='options__container'
                onChange={ event => addItemToList(item, event.target.value) }
            >
                <option value='General'>General</option>
                <option value='InProgress'>In-Progress</option>
                <option value='Urgent'>Urgent</option>
                <option value='Pasts'>Pasts</option>
                <option value='NonUrgent'>Non-Urgent</option>
            </select>
        </li>
    ));

    return itemsLis;
};

export default Options;