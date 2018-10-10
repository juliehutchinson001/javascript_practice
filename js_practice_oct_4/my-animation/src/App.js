import React, { Component, Fragment } from 'react';
import FieldsContainer from './components/Fields';
import WarningsContainer from './components/Warnings';

class FormContainer extends Component {

    handleInputChange(event) {

        const inputName = event.target.name;
        const inputValue = event.target.value;
        
        const userFields = {};
        userFields[inputName] = inputValue;

        this.setState( userFields );

    }

    handleFormSubmit(event) {

        event.preventDefault();

        const submitFieldNameLen = this.state.userName.length > 1;

        if(submitFieldNameLen) { this.setState({ formWarnings: ['Pick a larger name']}) }

    }
    
    constructor( props ) {
        super( props );

        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            formWarnings: [],
            showWarnings: false 
        };
    }

    render() {
        
        const { userName, userEmail, userPassword, formWarnings } = this.state;
        
        return (
            <Form 
                user={ userName }
                email={ userEmail }
                password={ userPassword }
                errors={ formWarnings }
                onChange={ (event) => this.handleInputChange(event) }
                onSubmit={ (event) => this.handleFormSubmit(event) }
            />
        );
    }
};

const Form = () => {
    return(
        <Fragment>
        
            <WarningsContainer />
            <FieldsContainer />
        
        </Fragment>
    );
}

export default FormContainer;