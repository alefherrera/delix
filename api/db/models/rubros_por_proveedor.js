/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rubros_por_proveedor', {
    proveedores_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proveedores',
        key: 'id'
      }
    },
    rubros_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rubros',
        key: 'id'
      }
    }
  }, {
    tableName: 'rubros_por_proveedor'
  });
};
