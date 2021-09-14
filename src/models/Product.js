const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Product = sequelize.define('product', {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img: {
      type: DataTypes.STRING,
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
    points: {
      type: DataTypes.ENUM({
        values: ['1', '2', '3', '4', '5']
      }),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
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
