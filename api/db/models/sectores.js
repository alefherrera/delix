/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sectores', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    esPrivado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'sectores'
  });
};
