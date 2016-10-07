/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rubrosPorProveedor', {
    proveedorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proveedores',
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
    tableName: 'rubrosPorProveedor',
    paranoid: true,
  });
};
