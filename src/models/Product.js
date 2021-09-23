const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Product = sequelize.define('product', {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.ENUM({
        values: ['1', '2', '3', '4', '5']
      })
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'product'
  })
}
