/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productosPorRecepciones', {
    recepcionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recepciones',
        key: 'id'
      }
    },
    productoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    }
  }, {
    tableName: 'productosPorRecepciones'
  });
};
