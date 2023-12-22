import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import getPolylineCoordinates, { getPoisFromMarker } from "./utils/utils";
export default function App() {
  const [polylineCoordinates, setPolylineCoordinates] = useState([]);
  const [poiMarkers, setPoiMarkers] = useState([]);
  useEffect(() => {
    getPolylineCoordinates().then((coordinates) => {
      setPolylineCoordinates(coordinates);
    });
  }, []);
  function handleMarkerPress(coordinates) {
    getPoisFromMarker(coordinates).then((results) => {
      console.log(results);
      setPoiMarkers(results);
    });
  }
  return (
    <View style={styles.container}>
      <Text>Travel Chum</Text>
      {polylineCoordinates.length !== 0 && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: polylineCoordinates[0].latitude,
            longitude: polylineCoordinates[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Polyline
            coordinates={polylineCoordinates}
            strokeWidth={3}
            strokeColor="blue"
          />
          <Marker
            coordinate={polylineCoordinates[0]}
            title="Origin"
            description="The start of your journey"
          />
          <Marker
            coordinate={
              polylineCoordinates[Math.floor(polylineCoordinates.length / 4)]
            }
            onPress={() =>
              handleMarkerPress(
                polylineCoordinates[Math.floor(polylineCoordinates.length / 4)]
              )
            }
            title="25%"
            description="are we there yet?"
          />
          <Marker
            coordinate={
              polylineCoordinates[Math.floor(polylineCoordinates.length / 2)]
            }
            onPress={() =>
              handleMarkerPress(
                polylineCoordinates[Math.floor(polylineCoordinates.length / 2)]
              )
            }
            title="50%"
            description="livin on a prayer"
          />
          <Marker
            coordinate={
              polylineCoordinates[
                Math.floor(polylineCoordinates.length * (3 / 4))
              ]
            }
            onPress={() =>
              handleMarkerPress(
                polylineCoordinates[
                  Math.floor(polylineCoordinates.length * (3 / 4))
                ]
              )
            }
            title="75%"
            description="getting close now!"
          />
          <Marker
            coordinate={polylineCoordinates[polylineCoordinates.length - 1]}
            title="Destination"
            description="The end of your journey"
          />
          {poiMarkers.map((poi) => (
            <Marker
              key={poi.place_id}
              coordinate={{
                latitude: poi.geometry.location.lat,
                longitude: poi.geometry.location.lng,
              }}
              title={poi.name}
              description={`A ${poi.types[0]}, rated ${poi.rating}/5`}
            />
          ))}
        </MapView>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "70%",
    height: "70%",
  },
});