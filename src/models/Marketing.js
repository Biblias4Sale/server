const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Marketing = sequelize.define('Marketing', {
    mailCreateAccount: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    smsCreateAccount: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mailConfirmCart: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    smsConfirmCart: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mailConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    smsConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mailDispatched: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    smsDispatched: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mailDelivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    smsDelivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mailCanceled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    smsCanceled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'Marketing'
  })
}
