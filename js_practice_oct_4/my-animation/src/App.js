import React, { Component, Fragment } from 'react';
import Fields from './components/Fields';
import WarningsContainer from './components/Warnings';

class FormContainer extends Component {

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

        if(submitFieldNameLen) { 
            this.setState( 
                { 
                    formWarnings: ['Pick a larger name'],
                    showWarnings: true
                }
            ) 
        }

    }

    render() {
        
        const { userName, userEmail, userPassword, formWarnings, showWarnings } = this.state;
        
        return (
            <Main 
                email={ userEmail }
                errors={ formWarnings }
                handleChange={ event => this.handleInputChange(event) }
                handleSubmit={ event => this.handleFormSubmit(event) }
                password={ userPassword }
                show={ showWarnings }                
                user={ userName }
            />
        );

    }
};

const Main = ({ email, errors, handleChange, handleSubmit, password, show, user }) => {
    return(
        <main>
        
            <WarningsContainer 
                show={ show } 
                errors={ errors } 
            />

            <Fields 
                email={ email } 
                handleChange={ handleChange } 
                handleSubmit={ handleSubmit } 
                password={ password }
                user={ user }
            />
        
        </main>
    );
}

export default FormContainer;