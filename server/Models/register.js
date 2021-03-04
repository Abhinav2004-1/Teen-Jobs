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
    },
    
    BlockedProperties: {
        type: [String],
        default: []
    },

    Collateral_Available: {
        type: String,
        default: 0
    },

    Achievements: {
        type: [String],
        default: []
    }
});

const RegistrationModel = mongoose.model('Registrations', Schema);

export default RegistrationModel;