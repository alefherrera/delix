/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('comandaEstado', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'comandaEstado',
        name: {
          singular: 'comandaEstado',
          plural: 'comandaEstado',
        }
    });
};
