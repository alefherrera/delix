/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('solicitudes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'solicitudes'
  });
};