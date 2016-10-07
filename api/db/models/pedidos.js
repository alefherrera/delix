/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('pedidos', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        usuarioId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },
        gruposDeMesaId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'gruposDeMesas',
                key: 'id'
            }
        },
        pedidoEstadoId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'pedidoEstado',
                key: 'id'
            }
        }
    }, {
        tableName: 'pedidos',
        paranoid: true,
    });
};
