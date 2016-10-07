module.exports = ({
    productos
}) => {
    return Promise.all(
        productos.upsert({
            id: 1,
            descripcion: 'Coca cola 350cc',
            precio: 15,
            esFinal: true
        }),
        productos.upsert({
            id: 2,
            descripcion: 'Sprite 350cc',
            precio: 12,
            esFinal: true
        }),
        productos.upsert({
            id: 3,
            descripcion: 'Flan',
            precio: 25,
            esFinal: true
        }),
        productos.upsert({
            id: 4,
            descripcion: 'Tiramisu',
            precio: 30,
            esFinal: true
        }),
        productos.upsert({
            id: 5,
            descripcion: 'Selva Negra',
            precio: 50,
            esFinal: true
        })
    );
};
