const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    familyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'users'
  })
}
