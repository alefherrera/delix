/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('platosPorPromos', {
    platoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'platos',
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
    tableName: 'platosPorPromos',
    name: {
      singular: 'platosPorPromos',
      plural: 'platosPorPromos',
    },
  });
};
