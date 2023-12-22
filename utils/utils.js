import axios from "axios"
import polyline from "google-polyline";
function getPolylineCoordinates() {
// make sure to add your api key to the end of the query string
    return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=58.642334,-3.070539&destination=50.0678,-5.7097&key=`)
    .then(({data}) => {
        const steps =  data.routes[0].legs[0].steps;
        let coordinates = [];
        steps.forEach(step => {
            const polyArray = polyline.decode(step.polyline.points);
            polyArray.forEach(point => {
                const mappedPoint =  {
                    latitude: point[0],
                    longitude: point[1]
                };
                coordinates.push(mappedPoint)
            });
            
        })
        return coordinates
    })
}

export default getPolylineCoordinates