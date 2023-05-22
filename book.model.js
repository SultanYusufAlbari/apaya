const { sequelizeConnection } = require(".");

module.exports = (sequelizeConnection, Sequelize) => {
    const Book = sequelizeConnection.define("books", {
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        release_date: {
            type: DataTypes.DATEONLY,
        },
        subject: {
            type: DataTypes.INTEGER,
        }
    });

    return Book;
};
