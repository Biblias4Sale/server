const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Cart = sequelize.define('cart', {
    state: {
      type: DataTypes.ENUM({
        values: ['Generado', 'Aprobado', 'Despachado', 'Entregado']
      }),
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'cart'
  })
}
