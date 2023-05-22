const db = require("../models");
const Grade = db.grade;
const Op = db.Sequelize.Op;

//Retrieve all students with their grade from the database.

exports.findAll = (req, res) => {
    Grade.findAll({
        where: {
            grade: req.params.id
        },
        include: [{
            model: db.student
        }]
    }).then(result => {
        res.send(result);
    }).catch((error)=> {
        console.error('Failed to retrieve data :', error);
    });
};