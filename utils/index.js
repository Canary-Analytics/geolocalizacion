exports.calculate = (datos) => {

    let coords = [];

    for (let i = 0; i < datos.length; i++) {

        if (datos[i].place != undefined) {

            let longitud = datos[i].place.bounding_box.coordinates[0][1][0];
            let latitud = datos[i].place.bounding_box.coordinates[0][1][1];
            coords.push({lat: latitud, lng: longitud, count: 1});

        }

    }

    let coordenadas = {
        max: 8,
        data: coords
    };

    return coordenadas;
}
