const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Categories = sequelize.define('categories', {
    id_cat: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    freezeTableName: true,
    sequelize,
    tableName: 'categories'
  })
}
