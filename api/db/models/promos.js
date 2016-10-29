/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'promos',
    name: {
      singular: 'promo',
      plural: 'promos',
    },
    paranoid: true,
  });
};
