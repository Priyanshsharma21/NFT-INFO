import { View, Text,Image } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {COLORS, SIZES, SHADOWS,assets} from '../constants'
import {CircleButton,RectButton} from './Button'
import {SubInfo,EthPrice,NFTTitle} from './SubInfo.js'


const NFTCard = ({data}) => {
    const navigation = useNavigation();

  return (
    <View
    style={{
        backgroundColor:COLORS.white,
        borderRadius:SIZES.font,
        marginBottom:SIZES.extraLarge,
        margin:SIZES.base,
        ...SHADOWS.dark
    }}
    >
    <View style={{width:'100%', height:250}}>
        <Image source={data?.image} resizeMode="cover"
        style={{
            width:'100%',
            height:'100%',
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius : SIZES.font,
        
        }}
         />
         <CircleButton imgUrl={assets?.heart} right={10} top={10}/>
    </View>
      <SubInfo />

      <View style={{
        width:'100%',
        padding:SIZES.font
      }}>
      
      <NFTTitle title={data?.name} subtitle={data?.creator} titleSize={SIZES.large} subTitles={SIZES.small}/>
      
      <View style={{marginTop:SIZES.font,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
          <EthPrice price={data?.price}/>
          <RectButton minWidth={120}
          fontSize={SIZES.font}
          handlePress={()=>navigation.navigate('Details',{data})} //on pressing we go to nft detail page and have all info about that nft thats why we pass data
          />
      </View>
      </View>
    </View>
  )
}

export default NFTCard