/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recepciones', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    solicitudes_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'solicitudes',
        key: 'id'
      }
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'recepciones'
  });
};
