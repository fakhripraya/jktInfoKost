const router = require('express').Router();
const {
    Router
} = require('express');
let MasterItem = require('../models/masterItem.model');

//Show all item
router.route('/').get((req, res) => {
    MasterItem.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Find item
router.route('/:id').get((req, res) => {
    MasterItem.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add item
router.route('/addItem').post((req, res) => {

    const itemcode = req.body.itemcode;
    const itemdesc = req.body.itemdesc;

    const newItem = new MasterItem({
        itemcode,
        itemdesc,
        isDelete: false
    });

    newItem.save()
        .then(() => res.json('Item ' + `${newItem.itemdesc}` + ' has been added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update item
router.route('/updateItem/:id').post((req, res) => {
    MasterItem.findById(req.params.id)
        .then(item => {
            item.itemdesc = req.body.itemdesc;

            item.save()
                .then(() => res.json('Successfully update item!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete item
router.route('/deleteItem/:id').post((req, res) => {
    MasterItem.findById(req.params.id)
        .then(item => {
            item.isDelete = true;

            item.save()
                .then(() => res.json("Item " + `${newItem.itemdesc}` + ' has been deleted!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;