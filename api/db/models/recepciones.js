/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recepciones', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    solicitudId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'solicitudes',
        key: 'id'
      }
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'recepciones',
    name: {
      singular: 'recepcion',
      plural: 'recepciones',
    },
    paranoid: true,
  });
};
