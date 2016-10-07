/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedores', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    razonSocial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'proveedores',
    paranoid: true,
  });
};
