/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comandas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pedidoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'pedidos',
        key: 'id'
      }
    },
    comandaEstadoId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 1,
        references: {
            model: 'comandaEstado',
            key: 'id'
        }
    }
  }, {
    tableName: 'comandas',
    name: {
      singular: 'comanda',
      plural: 'comandas',
    },
    paranoid: true
  });
};
