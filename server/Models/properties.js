import mongoose from 'mongoose';
const SchemaInstance = mongoose.Schema;

const Schema = new SchemaInstance({
    Location: {
        type: String,
        required: true
    },

    Title: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    },

    Price: {
        type: String,
        required: true
    },

    Picture: {
        type: String,
        data: Buffer,
        required: true
    },

    Dimensions: {
        type: {length: Number, width: Number},
        required: true
    },

    sellerID: {
        type: String,
        required: true
    }
})

const PropertyModel = mongoose.model('Properties', Schema);

export default PropertyModel;