module.exports = ({
    usuarios
}) => {
    return Promise.all(
        usuarios.upsert({
            id: 1,
            nombre: 'Alejandro',
            apellido: 'Herrera',
            usuarioTipoId: 1
        })
    );
};
