/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productosPorRubros', {
    productoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    rubroId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rubros',
        key: 'id'
      }
    }
  }, {
    tableName: 'productosPorRubros',
    paranoid: true,
  });
};
