module.exports = ({
    mesas
}) => {
    return Promise.all(
        mesas.upsert({
            id: 1,
            grupoDeMesasId: 1,
            capacidad: 4
        }),
        mesas.upsert({
            id: 2,
            grupoDeMesasId: 2,
            capacidad: 2
        }),
        mesas.upsert({
            id: 4,
            grupoDeMesasId: 3,
            capacidad: 4
        }),
        mesas.upsert({
            id: 3,
            grupoDeMesasId: 4,
            capacidad: 8
        })
    );
};
