module.exports = ({
    usuarios
}) => {
    return Promise.all(
        usuarios.upsert({
            id: 1,
            Nombre: 'Alejandro',
            Apellido: 'Herrera',
            usuario_tipo_id: 1
        })
    );
};
