/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    grupoDeMesasId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'gruposDeMesas',
        key: 'id'
      }
    },
    capacidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'mesas',
    paranoid: true,
  });
};
