import React from 'react';

const Options = ({ value, handleOptionChange }) => (
    <select value={value} onChange={handleOptionChange} >
        <option value="0">General</option>
        <option value="1">List1</option>
        <option value="2">List2</option>
    </select>
);

export default Options;