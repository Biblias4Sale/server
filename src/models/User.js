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
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    province: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      // allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'User'
  })
}
