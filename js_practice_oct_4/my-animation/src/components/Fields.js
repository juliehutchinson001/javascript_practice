import React, { Component } from 'react';

class FieldsContainer extends Component {
    
    
    
    render() {

        return <Fields />;

    }
};

const Fields = () => {
    return (
        <form>
            <label>Name: 
                <input type='text' name='name' />
            </label>
            <label>Name: 
                <input type='email' name='email' />
            </label>
            <label>Name: 
                <input type='password' name='password' />
            </label>
            <input type='submit' value='submit' />
        </form>
    );
};

export default FieldsContainer;