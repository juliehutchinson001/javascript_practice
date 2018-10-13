import React from 'react';

const Fields = ({ email, handleChange, handleSubmit, password, user }) => (
        <form onSubmit={ handleSubmit }>
            <label>Name:
            </label>
            <label>Email:
                <input id='user-email' type='email' name='email' onChange={ handleChange } value={ email } />
            </label>
            <label>Password:
                <input id='user-password' type='password' name='password' onChange={ handleChange } value={ password } />
            </label>
            <input type='submit' value='submit' />
        </form>
);

export default Fields;