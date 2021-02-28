import mongoose from 'mongoose';
const SchemaInstance = mongoose.Schema;

const Schema = new SchemaInstance({
    location: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    image: {
        type: String,
        data: Buffer,
        required: true
    },

    dimensions: {
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