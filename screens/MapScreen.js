import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import Map from './Map'
import tw from "twrnc";

const MapScreen = () => {
  return (
    <SafeAreaView>
      
      <View style={tw `h-1/2`}><Map/></View>
      <View style={tw `h-1/2`}></View>
    </SafeAreaView>
  )
}

export default MapScreen