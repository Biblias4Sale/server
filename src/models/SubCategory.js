const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const SubCategory = sequelize.define('subCategory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'subCategory'
  })
}
