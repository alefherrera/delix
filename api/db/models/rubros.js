/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rubros', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rubros'
  });
};
