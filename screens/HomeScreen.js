import { Text, View, SafeAreaView, Image } from "react-native";
import React, { Component } from "react";
import tw from "twrnc";
import NavOptions from "./NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../navSlice";

const HomeScreen = () => {
  const dispatch= useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require("../assets/logo.png")}
        />
      </View>
      <GooglePlacesAutocomplete
        placeholder="Where From?"
        style={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 10,
          },
        }}
        onPress={(data,details =null)=>{
          dispatch(setOrigin({
            location:details.geometry.location,
            description:data.description
          }))
          dispatch(setDestination(null));
        }}
        query={{
          key: API_KEY,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;
