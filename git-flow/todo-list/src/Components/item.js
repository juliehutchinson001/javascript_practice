import React from 'react';

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: 'General',
        }

        this.updateItemLocation = this.updateItemLocation.bind(this);
    }

    updateItemLocation(direction) {
        const {
            item,
            moveTodo,
        } = this.props;

        const newLocation = moveTodo(item, direction, this.state.currentLocation);
        this.setState({ currentLocation: newLocation });
    }

    render() {
        const {
            item,
            moveTodo,
            addItemToList,
        } = this.props;

        return (
            <Item
                item={ item }
                updateItemLocation={ updateItemLocation }
                addItemToList={ addItemToList }
            />
        );
    }
}

const Item = ({ item, updateItemLocation, addItemToList }) => (
    <li className='options__todo'>
        <button
            className='options__left--arrow'
            type='button'
            onClick={ () => updateItemLocation('left') }
        >
            {'<'}
        </button>
        <span >{ item }</span>
        <button
            className='options__right--arrow'
            type='button'
            onClick={ () => updateItemLocation('right') }>
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
);

export default ItemContainer;
