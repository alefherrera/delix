/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('platosPorComandas', {
    comandaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comandas',
        key: 'id'
      }
    },
    platoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'platos',
        key: 'id'
      }
    }
  }, {
    tableName: 'platosPorComandas',
    paranoid: true,
  });
};
