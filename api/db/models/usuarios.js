/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuario_tipo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuario_tipo',
        key: 'id'
      }
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usuarios'
  });
};
