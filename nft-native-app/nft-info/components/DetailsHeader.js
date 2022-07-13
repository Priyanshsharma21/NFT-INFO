import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton} from "../components";



const DetailsHeader = ({data, navigation}) => {
  return (
    <View style={{width:'100%', height:300}}>
      <Image source={data?.image} resizeMode="contain" style={{width:'100%', height:'100%'}}/>
      <CircleButton 
      imgUrl={assets?.left} 
      handlePress={()=>navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

    <CircleButton 
      imgUrl={assets.heart} 
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

export default DetailsHeader