/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promosPorComandas', {
    comandaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comandas',
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
    tableName: 'promosPorComandas',
    name: {
      singular: 'promosPorComandas',
      plural: 'promosPorComandas',
    },
    paranoid: true,
  });
};
