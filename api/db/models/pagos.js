module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagos', {
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
    pagoTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'pagoTipos',
        key: 'id'
      }
    },
    montoRecibido: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'pagos',
    name: {
      singular: 'pago',
      plural: 'pagos',
    },
    paranoid: true,
  });
};
