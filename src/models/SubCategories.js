const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const SubCategories = sequelize.define('subCategories', {
    id_subCat: {
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
    tableName: 'subCategories'
  })
}
