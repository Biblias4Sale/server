const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'order'
  })
}
