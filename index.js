const Sequelize = require("sequelize");
const sequelizeConnection = new Sequelize(
    'hello_world_db',
    'root',
    '', 
    {
        host: "localhost",
        dialect: 'mysql'
    }
);

const book = require("./book.model.js")(this.sequelizeConnection, Sequelize);

const db = {}; 
db.Sequelize = Sequelize; //property depedency
db.sequelizeConnection = this.sequelizeConnection; //property sequelize connection 
db.book = book; //property models
db.student = require("./student.model.js")(sequelizeConnection, Sequelize);
db.grade =require("./grade.model.js")(sequelizeConnection, Sequelize);
var course = require("./course.model.js")(sequelizeConnection, Sequelize);
db.course = course.Course
db.studentCourse = course.StudentCourse

db.student.belongsTo(db.grade);
db.grade.hasMany(db.student);

db.course.belongsToMany(db.student, {
    through: 'StudentCourses',
    foreignKey: 'courseId'
})

db.student.belongsToMany(db.course, {
    through: 'StudentCourses',
    foreignKey: 'studentId'
})
module.exports = db;