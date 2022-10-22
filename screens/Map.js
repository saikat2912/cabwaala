import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectOrigin } from "../navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <View>
      <MapView
        style={tw`p-50`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />
    </View>
  );
};

export default Map;
