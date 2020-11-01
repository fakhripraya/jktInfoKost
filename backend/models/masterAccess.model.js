const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const masterAccessSchema = new Schema({
    RoleId: {
        type: Number,
        required: true
    },
    AccessId: {
        type: Number,
        required: true,
        unique: true
    },
    AccessName: {
        type: String,
        required: true,
        unique: true
    },
    isDelete: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const MasterAccess = mongoose.model('dbMasterAccess', masterAccessSchema);

module.exports = MasterAccess;