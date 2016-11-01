/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('pagoTipos', {
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
        tableName: 'pagoTipos',
        name: {
          singular: 'pagoTipo',
          plural: 'pagoTipos',
        }
    });
};
