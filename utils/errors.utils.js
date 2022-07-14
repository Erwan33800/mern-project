module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' };

    if(err.message.includes('pseudo')) {
        errors.pseudo = 'Pseudo incorrect ou déjà utilisé';
    }
    if(err.message.includes('email')) {
        errors.email = 'Email incorrect ou déjà utilisé';
    }
    if(err.message.includes('password')) {
        errors.password = 'Password incorrect';
    }

    if(err.code === 11000 && Object.keys(err.keyValue).includes('pseudo')) {
        errors.pseudo = 'Pseudo déjà utilisé';
    }
    if(err.code === 11000 && Object.keys(err.keyValue).includes('email')) {
        errors.email = 'Email déjà utilisé';
    }
    return errors;
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' };

    if(err.message.includes('email')) {
        errors.email = 'Email incorrect';
    }
    if(err.message.includes('password')) {
        errors.password = 'Password incorrect';
    }

    return errors;
}