'use strict';
const db = require('../models');

exports.getStuff = async (req, res) => {
    try {
        const stf = await db.Stuff.findAll() ;
        res.status(200);
        res.send(stf);
    } catch (e) {
        console.log('error ', e); 
        res.sendStatus(500);
    }
};
function deconstructStuff(body) {
    let stuff = {};
    stuff.stufftype = body.stuffType;
    stuff.stuffgood = body.stuffGood;
    stuff.stuffamount = body.stuffAmount;
    return stuff
}
exports.postStuff = async (req, res) => {
    try {
        let stf = deconstructStuff(req.body);
        await db.Stuff.create(stf);
        res.status(201);
        res.send();
    } catch (e) {
        console.log('error ', e); 
        res.sendStatus(500);
    }
};

function deconstructDelete(){

}
exports.deleteStuff = async (res, req) => {
    try {
        let stuffToDelete = req.body.stuffToDelete
        await db.Stuff.destroy({
            where:{
                stufftype:stuffToDelete
            }
        });
        res.status(201);
        res.send();
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
}