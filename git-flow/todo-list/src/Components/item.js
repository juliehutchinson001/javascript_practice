import React from 'react';

const Item = props => {

    const {
        item,
        rightList,
        leftList,
        currentLocation,
        addItemToList,
    } = props;

    return (
        <li className='options__todo'>
            <button
                className='options__left--arrow'
                type='button'
                onClick={ () => addItemToList(item, leftList, currentLocation) }
            >
                {'<'}
            </button>
            <span >{ item }</span>
            <button
                className='options__right--arrow'
                type='button'
                onClick={ () => addItemToList(item, rightList, currentLocation) }
            >
                {'>'}
            </button>
            <select
                className='options__container'
                onChange={ event => addItemToList(item, event.target.value, currentLocation) }
                value={ currentLocation }
            >
                <option value='General'>General</option>
                <option value='In-Progress'>In-Progress</option>
                <option value='Urgent'>Urgent</option>
                <option value='Pasts'>Pasts</option>
                <option value='Non-Urgent'>Non-Urgent</option>
            </select>
        </li>
    );
}

export default Item;
