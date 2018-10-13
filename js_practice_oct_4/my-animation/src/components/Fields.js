import React from 'react';

const Fields = ({ email, handleChange, handleSubmit, password, user }) => (
        <form onSubmit={ handleSubmit }>
            <label>Name:
            </label>

            <input type='submit' value='submit' />
        </form>
);

export default Fields;