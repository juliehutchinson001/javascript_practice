import React from 'react';

const Fields = ( {email, handleChange, handleSubmit, password, user} ) => {
    return (
        <form>
            <label htmlFor='user-name' >Name: 
                <input id='user-name' type='text' name='name' onChange={ event => handleChange(event) } />
            </label>
            <label htmlFor='user-email' >Email: 
                <input id='user-email' type='email' name='email' onChange={ event => handleChange(event) } />
            </label>
            <label htmlFor='user-password' >Password: 
                <input id='user-password' type='password' name='password' onChange={ event => handleChange(event) } />
            </label>
            <input type='submit' value='submit' />
        </form>
    );
};

export default FieldsContainer;