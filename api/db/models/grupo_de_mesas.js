/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_de_mesas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sectores_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sectores',
        key: 'id'
      }
    }
  }, {
    tableName: 'grupo_de_mesas'
  });
};
