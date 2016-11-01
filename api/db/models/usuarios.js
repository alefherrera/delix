/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuarioTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuarioTipo',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usuarios',
    name: {
      singular: 'usuario',
      plural: 'usuarios',
    },
    paranoid: true,
  });
};
