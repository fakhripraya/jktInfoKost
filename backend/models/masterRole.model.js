const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const masterRoleSchema = new Schema({
    RoleId: {
        type: Number,
        required: true,
        unique: true
    },
    RoleName: {
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

const MasterRole = mongoose.model('dbMasterRole', masterRoleSchema);

module.exports = MasterRole;