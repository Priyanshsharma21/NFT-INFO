import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar,DetailsHeader } from "../components";





const Details = ({route, navigation}) => {
  const { data } = route?.params;
  
  return (
   <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar 
      barStyle="dark-content"
      backgroundColor = 'transparent'
      translucent={true}
      />

      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES?.font,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.5)',
        zIndex:1,
      }}>
        <RectButton minWidth={170} fontSize={SIZES?.large} {...SHADOWS?.dark}/>
      </View>

      <FlatList 
      data={data.bids} 
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES?.extraLarge * 3}}
      renderItem={(item)=><DetailsBid bid={item.item} />}
      ListHeaderComponent={()=>(
        <React.Fragment>
          <DetailsHeader data={data} navigation={navigation} />
          <SubInfo />
          <View style={{padding:SIZES?.font}}>
            <DetailsDesc data={data}/>
            {data.bids.length > 0 &&(
              <Text style={{
                fontSize:SIZES?.font,
                fontFamily:FONTS?.semiBold,
                color:COLORS?.primary
              }}>
                Current Bid
              </Text>
            )}
          </View>
        </React.Fragment>
      )}
      />
   </SafeAreaView>
  )
}

export default Details
