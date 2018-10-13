import React, { Component } from 'react';
import Fields from './components/Fields';
import WarningsContainer from './components/Warnings';
import checkErrors from './helpers/check_errors';

class FormContainer extends Component {

    constructor( props ) {
        super( props );



        this.setState( userFields );

    }

    handleFormSubmit(event) {

        event.preventDefault();

        const errorsArr = checkErrors(this.state.formFields);
        const errors = errorsArr.filter(error => error !== undefined);

        if (errors.length) { 
            this.setState( 
                { 
                    formWarnings: errors,
                    showWarnings: true
                }
            ) 
        }

    }

    render() {
        
        const { formWarnings, showWarnings } = this.state;
        const { name, email, password,  } = this.state.formFields;

        return (
            <Main 
                email={ email.value }
                errors={ formWarnings }
                handleChange={ event => this.handleInputChange(event) }
                handleSubmit={ event => this.handleFormSubmit(event) }
                password={ password.value }
                show={ showWarnings }                
                user={ name.value }
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