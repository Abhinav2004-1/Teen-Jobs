import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        required: true
    },

    Phone: {
        type: String,
        required: true
    }
});

const RegistrationModel = mongoose.model('Registrations', Schema);

export default RegistrationModel;