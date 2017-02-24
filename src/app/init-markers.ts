export class Init {
    load() {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log("No markers found.....creating...");

            var markers = [
                {
                    name: 'Company One',
                    lat: 42.825588,
                    lng: -71.018029,
                    draggable: true
                },
                {
                    name: 'Company Two',
                    lat: 42.868164,
                    lng: -71.889071,
                    draggable: true
                },
                {
                    name: 'Company Three',
                    lat: 42.858279,
                    lng: -71.930498,
                    draggable: true
                }


            ];

            localStorage.setItem('markers', JSON.stringify(markers))

        }

        else{
            console.log('Loading makers...')
        }
    }

}