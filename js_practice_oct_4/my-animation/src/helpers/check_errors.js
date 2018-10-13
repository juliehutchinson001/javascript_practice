// formFields: {
//     name: {
//         value: '',
//         id: 'user-name'
//     },
//     email: {
//         value: '',
//         id: 'user-email'
//     },
//     password: {
//         value: '',
//         id: 'user-password'
//     },
// },

// [{
//     errorName: 'Please set a valid ' + event.target.name,
//     errorId: event.target.id
// }]

const checkName = name => name.length > 1;

const checkEmail = email => email.includes('.com');

const checkPassword = password => password.length > 6;

const checkErrors = fields => {
    debugger;
    const fieldsNames = Object.keys(fields);
    
    const errors = fieldsNames.map(fieldName => {
        switch(fieldName) {
            case 'name':
                const nameFieldHasError = !checkName(fields[fieldName].value);

                if (nameFieldHasError) {
                    return {
                        errorName: 'Please type in a valid name',
                        errorId: fields[fieldName].id
                    };
                }
                break; 

            case 'email':
                const emailFieldIsWrong = !checkEmail(fields[fieldName].value);
                
                if (emailFieldIsWrong) {
                    return {
                        errorName: 'Please type in a valid email',
                        errorId: fields[fieldName].id
                    };
                }
                break; 

            case 'password':
                const passwordFieldIsWrong = !checkPassword(fields[fieldName].value);

                if (passwordFieldIsWrong) {
                    return {
                        errorName: 'Please type in a valid password',
                        errorId: fields[fieldName].id
                    };
                }
                break; 
        }
    });

    return errors;
};

export default checkErrors;
