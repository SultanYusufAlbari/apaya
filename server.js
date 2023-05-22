const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin : "http://localhost:3000"
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencloded
app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");
db.sequelizeConnection.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

//simple route

//import book controller
const bookController = require("./app/controllers/book.controller");
const student = require("./app/controllers/student.controller")
const grade = require("./app/controllers/grade.controller")
const course = require("./app/controllers/course.controller")


app.post("/", (req, res) => {
    console.log('>> create book api');
    bookController.create(req, res);
});

//find all book route
app.get("/", (req, res) => {
    bookController.findAll(req, res);
});

//find book by id route
app.get("/:id", (req, res) => {
    bookController.findOne(req, res);
});

//delete book with an id route
app.delete("/:id", (req, res) => {
    bookController.delete(req, res);
});

//create book route
app.get("/books", (req, res)=> {
    book.findAll(req, res)
});

app.post("/books", (req, res)=>{
    book.create(req, res)
});

app.get("books/find/:id", (req, res)=>{
    book.findOne(req, res)
});

app.get("books/findId/:id", (req, res)=>{
    book.findBookId(req, res)
});

app.delete("books/delete/:id", (req, res)=>{
    book.delete(req, res)
});

//find all books route
app.get("/students/findAllWithGrade", (req,res) =>{
    db.student.findAll(req, res)
});

//make simple data
app.get("/students/bulkCreate", (req, res)=> {
    db.student.bulkCreate(req, res)
});

//find all books route
app.get("/grade/:id/findAllStudents", (req, res)=> {
    grade.findAll(req, res)
});

app.get("/courses", (req, res)=> {
    course.findAll(req, res)
});

app.get("/courses/bulkCreate", (req, res)=> {
    course.bulkCreate(req, res)
});

//set port, listen for requests
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log('Server is Running on port $(PORT).');
});