$(document).ready(() => {

    $.get('/datos', {}, (data) => {
        console.log(data)

        let v_latitud = 28.50891;
        let v_longitud = -16.33778;
        //let v_zoom = 5;
        let cfg = {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            // if scaleRadius is false it will be the constant radius used in pixels
            "radius": 20,
            "maxOpacity": .8,
            // scales the radius based on map zoom
            "scaleRadius": false,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": true,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count'
        };

        // Humanitarian Style.
        let v_base_layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29zYWNhIiwiYSI6ImNqMjIzNHMwdTAwNWkzM3BodGVzdDYzaXIifQ.Sy1p62VWlmf1UMh53B1W7g', {
            attribution: '\u00a9 <a href="https://www.mapbox.com/about/maps/"> Mapbox </a> \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT',
            maxZoom: 15,
            minZoom: 2
        });

        // Layer Mapa de calor.
        let v_heatmapLayer = new HeatmapOverlay(cfg);

        v_mapa = new L.Map('mapa', {
            center: new L.LatLng(v_latitud, v_longitud),
            zoom: 2,
            layers: [v_base_layer, v_heatmapLayer]
        });

        v_heatmapLayer.setData(data);

    });

});
