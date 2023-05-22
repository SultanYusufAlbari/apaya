const db = require("../models");
const Student = db.student;
const Op = db.Sequelize.Op;

//create sample data of user with their grade.
exports.bulkCreate = (req, res) => {
    const grade_data = [{grade: 9}, {grade: 10}, {grade: 11}]

    const student_data = [
        {name: "John Baker", gradeId: 2},
        {name: "Max Butler", gradeId: 1},
        {name: "Ryan Fisher", gradeId: 3},
        {name: "Robert Gray", gradeId: 2},
        {name: "Sam Lewis", gradeId: 1}
    ]

    db.grade.bulkCreate(grade_data, {
        validate: true
    }).then(
        db.student.bulkCreate(student_data, {
            validate: true
        }).catch((err)=> {
            res.send(err);
        })
    ).catch((err)=> {
        res.send(err);
    });
    res.send("bulk create success")
};