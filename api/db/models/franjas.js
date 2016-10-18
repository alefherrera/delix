/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('franjas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    horaInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    horaFin: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'franjas',
    name: {
      singular: 'franja',
      plural: 'franjas',
    },
    paranoid: true,
  });
};
