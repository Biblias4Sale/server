const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const WishList = sequelize.define('wishlist', {
    name: {
      type: DataTypes.STRING,
      unique: false
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'wishlist'
  })
}
