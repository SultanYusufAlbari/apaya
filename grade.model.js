module.exports = (sequelizeConnection, Sequelize) => {
    const Grade = sequelizeConnection.define("grades", {
        grade: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Grade;
};