const db = require('../models');

const Book = db.book;
const Op = db.Sequelize.Op;

//create book method
exports.create = (req, res) => {
    console.log('>> book controller api');
    //validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    console.log('>> Create book object');
    //create book object
    const book = {
        title: req.body.title,
        author: req.body.author,
        release_date: req.body.release_date,
        subject: req.body.subject,
    };

    //save book to database
    Book.create(book)
    .then( data => {
        console.log('>> insert book successfully');
        res.send(data);
    })
    .catch(err => {
        console.log('>> insert book fail');
        res.status(500).send({
            message: "Error occurred while inserting book."
        });
    });
    exports.findAll = (req, res) => {
        Book.findAll({
            include:[{
                model: db.grade
            }]
        })
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message ||"error while retrieving books."
            });
        });
    };

    exports.findOne = (req, res) => {
        Book.findOne({
            where: {
                id: req.params.id
            }
        })
        .then (data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.mesage || "Error while finding book."
            });
        });
    };

    exports.delete = (req, res) => {
        Book.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(
            res.send({
                message: "Success delete book with id =" +req.params.id +"!",
            })
        )
        .catch(err => {
            res.status(500).send({
                message: "could not delete book with id = " +req.params.id
            });
        });
    };

    //find a single book with Title
    exports.findBookTitle = (req, res)=>{
        db.sequelizeConnection.query('SELECT * FROM books WHERE title = ?', {
            replacements: ['REPLACE_BOOK_TITLE'],
            type: db.sequelizeConnection.QueryTypes.SELECT
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.mesage || "Error while finding Book."
            });
        });
    };
}