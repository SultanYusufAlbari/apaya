const db = require("../models");
const Course = db.Course;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Course.findAll({
        include: {
            model: db.student,
        },
    }).then(result =>{
        res.send(result);
    }).catch((error) => {
        res.send('Failed to retrieve data :', + error);
    })
};

exports.bulkCreate = (req, res) => {
    const course_data = [
        {course_name: "Science"},
        {course_name: "Maths"},
        {course_name: "History"}
    ]

    const student_course_data =[
        {studentId : 1, courseId: 1},
        {studentId : 2, courseId: 1},
        {studentId : 2, courseId: 3},
        {studentId : 3, courseId: 2},
        {studentId : 1, courseId: 2},
    ]
    Course.bulkCreate(course_data, {
        validate: true
    }).then(()=> {
        db.studentCourse.bulkCreate(student_course_data, {
            validate: true
        }).then(()=> {
            res.send("Bulk create success")
        }).catch((error)=> {
            res.send(error);
        });
    }).catch((error)=> {
        console.log(error);
    });
};