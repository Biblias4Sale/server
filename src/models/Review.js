const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Review = sequelize.define('Review', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'Review'
  })
}
