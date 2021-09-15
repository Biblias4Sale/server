const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Review = sequelize.define('review', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    points: {
      type: DataTypes.ENUM({
        values: ['1', '2', '3', '4', '5']
      }),
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'review'
  })
}
