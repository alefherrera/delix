/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    franjas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'franjas',
        key: 'id'
      }
    },
    grupo_de_mesas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'grupo_de_mesas',
        key: 'id'
      }
    }
  }, {
    tableName: 'reservas'
  });
};
