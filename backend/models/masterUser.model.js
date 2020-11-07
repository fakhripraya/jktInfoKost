const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const masterUserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String
    },
    displayName: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    },
    externalProvider: {
        type: Number,
        required: true
    },
    RoleId: {
        type: Number,
        required: true
    },
    isDelete: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const MasterUser = mongoose.model('dbMasterUser', masterUserSchema);

module.exports = MasterUser;