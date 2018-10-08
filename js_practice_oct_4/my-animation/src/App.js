import React, { Component, Fragment } from 'react';
import FieldsContainer from './components/Fields';
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

    render() {
        return (
            <Form 
                user={this.state.userName}
                email={this.state.userEmail}
                password={this.state.userPassword}
                errors={this.state.formWarnings}
                onChange={ (event) => this.handleFormChange(event) }
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