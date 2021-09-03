const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Products = sequelize.define('products', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'products'
  })
}
