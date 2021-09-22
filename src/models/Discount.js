const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Discount = sequelize.define('discount', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'discount'
  })
}
