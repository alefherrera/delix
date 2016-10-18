/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    franjaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'franjas',
        key: 'id'
      }
    },
    grupoDeMesasId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'gruposDeMesas',
        key: 'id'
      }
    }
  }, {
    tableName: 'reservas',
    name: {
      singular: 'reserva',
      plural: 'reservas',
    },
    paranoid: true,
  });
};
