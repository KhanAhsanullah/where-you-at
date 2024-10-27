import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, theme } from "../../constants";
import { Typography } from "./Typography";

type Props = {
  showCarpoolRide?: boolean;
  borderMqp? : number;
  marginMap?:number;

};

const BusRouteMap = (props: Props) => {
  const { showCarpoolRide = false,borderMqp, marginMap } = props;

  const busRouteCoordinates = [
    { latitude: 37.78825, longitude: -122.4324 }, 
    { latitude: 37.78925, longitude: -122.4334 }, 
    { latitude: 37.79025, longitude: -122.4344 },
  ];

  return (
    <View style={styles.container}>
      {/* <MapView
        style={[styles.map,{
          borderRadius: borderMqp,
          margin: marginMap,
        }]}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={busRouteCoordinates}
          strokeColor="#FF0000" 
          strokeWidth={4}
        />

        <Marker coordinate={busRouteCoordinates[0]} title="Start" />
        <Marker
          coordinate={busRouteCoordinates[busRouteCoordinates.length - 1]}
          title="End"
        />
      </MapView> */}

      {showCarpoolRide && (
        <View style={styles.carpolRideView}>
          <Typography color={theme.color.white} textType="bold">
            Carpool Ride
          </Typography>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,

  },
  carpolRideView: {
    backgroundColor: theme.color.primary,
    borderWidth: 1,
    width: "auto",
    height: "auto",
    paddingVertical: 10,
    position: "absolute",
    paddingHorizontal: 20,
    right: 10,
    top: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BusRouteMap;
