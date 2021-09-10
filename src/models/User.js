const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
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
      allowNull: false,
      unique: true
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
        values: ['User', 'Admin', 'Super']
      }),
      allowNull: false,
      defaultValue: 'User'
    },
    googleId: {
      type: DataTypes.STRING
    },
    cp: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    province: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'User'
  })
}
