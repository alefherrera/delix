/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promos_por_comandas', {
    comandas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comandas',
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
    tableName: 'promos_por_comandas'
  });
};
