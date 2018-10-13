import React from 'react';

// You only need a class component when:
//  * You need state OR
//  * You need lifecycles
//  * There may be another one but those two are the ones I know / most used

const WarningsContainer = ({ show, errors }) => {
    
    const errorsArr = errors.map((error, index) => (
            <li key={ index }>
                <a href={ '#' + error.errorId }>{ error.errorName }</a>
            </li>
    ));

    const classStyle = show ? 'showErrors' : 'hideErrors'

    return <Warnings errors={ errorsArr } styles={ classStyle } />;

};

const Warnings = ({ errors, styles }) => <ul className={ styles }>{ errors }</ul>;

export default WarningsContainer;
