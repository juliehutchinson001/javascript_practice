import React from 'react';

const Options = ({ value, handleOptionChange }) => (
    <select value={value} onChange={handleOptionChange} >
        <option value="general">General</option>
        <option value="list1">List1</option>
        <option value="list2">List2</option>
    </select>
);

export default Options;