function obtnenerDatos(mag) {
  const url =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const earthquakes = data.features.filter(
        (earthquake) => earthquake.properties.mag <= mag
      );

      earthquakes.forEach((element) => {
        const { mag, place, time, status, type, title, url, detail } =
          element.properties;

        const [longitude, latitude, depth] = element.geometry.coordinates;

        console.log("*************************");
        console.log("USGS All Earthquakes, Past Hour");
        console.log("-------------------------");
        console.log(`Total ${earthquakes.length} earthquakes`);
        console.log("-------------------------");
        console.log(new Date(time));
        console.log("=========================");
        console.log(`Título: ${title}`);

        console.log(`Magnitud: ${mag}`);
        console.log(`Fecha: ${time}`);
        console.log(`Tipo: ${type}`);
        console.log(`Estado: ${status}`);
        console.log(`Lugar: ${place}`);
        console.log(
          `Coordenadas: [Longitud: ${longitude}, Latitud: ${latitude}, Profundidad: ${depth}]`
        );
        console.log(`Info: ${url}`);
        console.log(`Detalles: ${detail}`);
        console.log("==========================");
      });
    });
}

console.log(obtnenerDatos(0.5));
