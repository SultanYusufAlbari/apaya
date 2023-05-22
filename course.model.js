module.exports = (sequelizeConnection, Sequelize) => {
    
    const Course = sequelizeConnection.define("courses", {
        course_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    
    const StudentCourse = sequelizeConnection.define('StudentCourses', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    });
    
    return {
        Course: Course,
        StudentCourse: StudentCourse
    };
};