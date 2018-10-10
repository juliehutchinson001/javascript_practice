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

        if(submitFieldNameLen) { 
            this.setState( 
                { 
                    formWarnings: ['Pick a larger name'],
                    showWarnings: true
                }
            ) 
        }

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
                email={ userEmail }
                errors={ formWarnings }
                onChange={ event => this.handleInputChange(event) }
                onSubmit={ event => this.handleFormSubmit(event) }
                password={ userPassword }
                show={ this.state.showWarnings }                
                user={ userName }
            />
        );
    }
};

const Form = ( {email, errors, onChange, onSubmit, password, show, user} ) => {
    return(
        <Fragment>
        
            <WarningsContainer 
                className={ show } 
                errors={ errors } 
            />
            
            <FieldsContainer 
                email={ email } 
                onChange={onChange} 
                onSubmit={ onSubmit } 
                password={ password }
                user={ user }
            />
        
        </Fragment>
    );
}

export default FormContainer;