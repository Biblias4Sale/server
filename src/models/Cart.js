const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Cart = sequelize.define('Cart', {
    status: {
      type: DataTypes.ENUM({
        values: ['En proceso', 'Generado', 'Pendiente de confirmación de pago', 'En preparación', 'Despachado', 'Entregado', 'Cancelado']
      }),
      allowNull: false
    },
    paymentsMethod: {
      type: DataTypes.STRING
    },
    soldDate: {
      type: DataTypes.DATE
    },
    confirmationDate: {
      type: DataTypes.DATE
    },
    preparationDate: {
      type: DataTypes.DATE
    },
    dispatchDate: {
      type: DataTypes.DATE
    },
    deliverDate: {
      type: DataTypes.DATE
    },
    cancelDate: {
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'Cart'
  })
}
