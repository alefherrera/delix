/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('productosPorComandas', {
        comandaId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'comandas',
                key: 'id'
            }
        },
        productoId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'productos',
                key: 'id'
            }
        }
    }, {
        tableName: 'productosPorComandas',
        paranoid: true,
    });
};
