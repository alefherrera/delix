/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    porcentajeDescuento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'promos'
  });
};
