/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productosPorSolicitudes', {
    solicitudId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'solicitudes',
        key: 'id'
      }
    },
    productoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    }
  }, {
    tableName: 'productosPorSolicitudes'
  });
};
