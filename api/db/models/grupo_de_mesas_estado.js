/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('grupoDeMesasEstado', {
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
        tableName: 'grupoDeMesasEstado',
        name: {
          singular: 'grupoDeMesasEstado',
          plural: 'grupoDeMesasEstado',
        }
    });
};
