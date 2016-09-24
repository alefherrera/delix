/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos_por_recepciones', {
    recepciones_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recepciones',
        key: 'id'
      }
    },
    productos_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    }
  }, {
    tableName: 'productos_por_recepciones'
  });
};
