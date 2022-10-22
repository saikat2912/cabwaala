import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React, { Component } from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: require("../assets/carRide.jpg"),
    screen: "MapScreen",
  },
  {
    id: "124",
    title: "Rent a Car",
    image: require("../assets/carrental.png"),
    screen: "RentCarScreen",
  },
];
const NavOptions = () => {
  const navigation= useNavigation();
  return (
    <SafeAreaView style={tw` p-3 pt-4 pr-5`}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={()=>navigation.navigate(item.screen)}
              style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
              <View>
                <Image
                  style={{ width: 120, height: 120, resizeMode: "contain" }}
                  source={item.image}
                />
                <Text style={tw`mt-2 text-lg font-semibold `}>
                  {item.title}
                </Text>
              </View>
              <Icon
                name="arrowright"
                type="antdesign"
                color="white"
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavOptions;
