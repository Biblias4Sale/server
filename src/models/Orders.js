const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Orders = sequelize.define('orders', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'orders'
  })
}
