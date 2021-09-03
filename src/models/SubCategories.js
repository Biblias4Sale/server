const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const SubCategories = sequelize.define('subCategories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'subCategories'
  })
}
