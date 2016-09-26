/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuarios_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    grupo_de_mesas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'grupo_de_mesas',
        key: 'id'
      }
    },
    pedido_estado_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'pedido_estado',
        key: 'id'
      }
    }
  }, {
    tableName: 'pedidos'
  });
};
