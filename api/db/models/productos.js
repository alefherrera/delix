/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    esFinal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'productos'
  });
};
