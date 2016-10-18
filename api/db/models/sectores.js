/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sectores', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    esPrivado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'sectores',
    name: {
      singular: 'sector',
      plural: 'sectores',
    },
    paranoid: true,
  });
};
