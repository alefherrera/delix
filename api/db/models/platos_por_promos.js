/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('platos_por_promos', {
    platos_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'platos',
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
    tableName: 'platos_por_promos'
  });
};
