/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productosPorPromos', {
    productoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    promoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'promos',
        key: 'id'
      }
    }
  }, {
    tableName: 'productosPorPromos',
    paranoid: true,
  });
};
