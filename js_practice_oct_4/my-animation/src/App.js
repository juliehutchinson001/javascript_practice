import React, { Component, Fragment } from 'react';

class FormContainer extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            showWarnings: false 
        };
    }

    render() {
        return <Form />;
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