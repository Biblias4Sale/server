const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Categories = sequelize.define('categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'categories'
  })
}
