const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Cart = sequelize.define('cart', {
    state: {
      type: DataTypes.ENUM({
        values: ['Generado', 'Aprobado', 'Despachado', 'Entregado']
      }),
      allowNull: false
    },
    discountPrice: {
      type: DataTypes.INTEGER
    },
    buyDate: {
      type: DataTypes.DATE
    },
    amount: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'cart'
  })
}
