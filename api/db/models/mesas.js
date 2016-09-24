/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesas', {
    idmesas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    sectores_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sectores',
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
    },
    capacidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'mesas'
  });
};
