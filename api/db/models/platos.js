/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('platos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'platos'
  });
};
