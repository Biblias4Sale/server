const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Discounts = sequelize.define('discounts', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'discounts'
  })
}
