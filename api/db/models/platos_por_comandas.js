/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('platos_por_comandas', {
    comandas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comandas',
        key: 'id'
      }
    },
    platos_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'platos',
        key: 'id'
      }
    }
  }, {
    tableName: 'platos_por_comandas'
  });
};
