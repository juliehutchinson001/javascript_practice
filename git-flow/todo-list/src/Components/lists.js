import React from 'react';
import Item from './item';
import findSiblingList from '../helpers/find_sibling_list';

const ListsContainer = ({ lists, addItemToList }) => {
    const listsArray = Object.keys(lists).map((listName, index, listArr) => {
        const rightListIndex = findSiblingList(index, 'right', listArr.length);
        const leftListIndex = findSiblingList(index, 'left', listArr.length);
        const rightList = listArr[rightListIndex];
        const leftList = listArr[leftListIndex];

        return (
            <List
                key={ index }
                listName={ listName }
                items={ lists[listName] }
                addItemToList={ addItemToList }
                rightList={ rightList }
                leftList={ leftList }
            />
        );
    });

    return listsArray;
};

const List = props => {

    const {
        listName,
        items,
        rightList,
        leftList,
        addItemToList,
    } = props;

    const itemsArray = items.map((item, index) => (
        <Item
            key={ index }
            item={ item }
            rightList={ rightList }
            leftList={ leftList }
            currentLocation={ listName }
            addItemToList={ addItemToList }
        />
    ));

    return (
        <div className="list__container" >
            <h1 className="list__header">{ listName }</h1>
            <ul className="list--body">
                { itemsArray }
            </ul>
        </div>
    );
};

export default ListsContainer;