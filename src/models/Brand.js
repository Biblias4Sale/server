const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Brand = sequelize.define('brand', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'brand'
  })
}
