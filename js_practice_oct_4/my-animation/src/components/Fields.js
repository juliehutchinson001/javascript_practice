import React, { Component } from 'react';

class FieldsContainer extends Component {
    
    constructor(props) {

        super(props);
    }
    
    render() {

        return (
            <Fields 
                email={ email } 
                onChange={onChange} 
                onSubmit={ onSubmit } 
                password={ password }
                user={ user }
            />
        );

    }
};

const Fields = ( {email, onChange, onSubmit, password, user} ) => {
    return (
        <form>
            <label htmlFor='user-name' >Name: 
                <input id='user-name' type='text' name='name' />
            </label>
            <label htmlFor='user-email' >Email: 
                <input id='user-email' type='email' name='email' />
            </label>
            <label htmlFor='user-password' >Password: 
                <input id='user-password' type='password' name='password' />
            </label>
            <input type='submit' value='submit' />
        </form>
    );
};

export default FieldsContainer;