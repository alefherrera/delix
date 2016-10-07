module.exports = ({
    usuarios
}) => {
    return Promise.all(
        usuarios.upsert({
            id: 1,
            Nombre: 'Alejandro',
            Apellido: 'Herrera',
            usuarioTipoId: 1
        })
    );
};
