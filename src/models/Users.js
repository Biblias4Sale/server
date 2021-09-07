const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    type: {
      type: DataTypes.ENUM({
        values: ['User', 'Admin']
      }),
      allowNull: false
    },
    googleId: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'Users'
  })
}
