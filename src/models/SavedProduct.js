const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const SavedProduct = sequelize.define('SavedProduct', {
    amount: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'SavedProduct'
  })
}
