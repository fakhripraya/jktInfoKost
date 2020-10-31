const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const masterItemSchema = new Schema({
    itemcode: {
        type: String,
        required: true
    },
    itemdesc: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const MasterItem = mongoose.model('dbMasterItem', masterItemSchema);

module.exports = MasterItem;