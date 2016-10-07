module.exports = ({
    sectores
}) => {
    return Promise.all(
        sectores.upsert({
            id: 1,
            esPrivado: false
        }),
        sectores.upsert({
            id: 2,
            esPrivado: true
        })
    );
};
