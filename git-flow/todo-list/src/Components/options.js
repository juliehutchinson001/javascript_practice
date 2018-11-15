import React from 'react';

const Options = ({ items, addItemToList, moveTodo }) => {

    const itemsLis = items.map((item, index) => (
        <li className='options__todo' key={ index }>
            <button
                type='button'
                onClick={ event => moveTodo(event, 'left')}
                data-idleft={ index }
                >
                {'<'}
                </button>
                <span>{ item }</span>
                <button
                data-idright={ index }
                type='button'
                onClick={ event => moveTodo(event, 'right')}
            >
                {'>'}
            </button>
            <select
                className='options__container'
                onChange={ event => addItemToList(item, event.target.value) }
            >
                <option value='General'>General</option>
                <option value='In-Progress'>In-Progress</option>
                <option value='Urgent'>Urgent</option>
                <option value='Pasts'>Pasts</option>
                <option value='Non-Urgent'>Non-Urgent</option>
            </select>
        </li>
    ));

    return itemsLis;
};

export default Options;