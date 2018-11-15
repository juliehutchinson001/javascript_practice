import React from 'react';
import Options from './options';

const ListsContainer = ({ lists, addItemToList, moveTodo }) => {


    const options = Object.keys(lists).map((listName, i) => (
        <div className="list__container" >
            <h1 className="list__header" key={ i }>{ listName }</h1>
            <ul className="list--body" key={ i }>
                <Options
                    moveTodo={ moveTodo }
                    items={ lists[listName] }
                    addItemToList={ addItemToList }
                />
            </ul>
        </div>
    ));

    return options;
};

export default ListsContainer;