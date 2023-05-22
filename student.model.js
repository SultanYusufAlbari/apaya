module.exports = (sequelizeConnection, Sequelize) => {
 const Student = sequelizeConnection.define("students", {
    student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
 });
 return Student;
};