/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos_por_promos', {
    productos_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    promos_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'promos',
        key: 'id'
      }
    }
  }, {
    tableName: 'productos_por_promos'
  });
};
