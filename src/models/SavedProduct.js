const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const SavedProduct = sequelize.define('SavedProduct', {
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'SavedProduct'
  })
}
