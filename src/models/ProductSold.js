const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const ProductSold = sequelize.define('ProductSold', {
    qty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    soldDate: {
      type: DataTypes.STRING
    },
    discount: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'ProductSold'
  })
}
