/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gruposDeMesas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sectoreId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sectores',
        key: 'id'
      }
    }
  }, {
    tableName: 'gruposDeMesas'
  });
};
