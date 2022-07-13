import { View, Text,Image } from 'react-native'
import { SIZES,FONTS,SHADOWS,COLORS,assets } from '../constants'

export const NFTTitle = ({title,subtitle,titleSize,subTitleSize}) => {
  return (
    <View>
      <Text style={{
        fontSize:titleSize,
        fontFamily:FONTS.semiBold,
        color:COLORS.primary
      }}>{title}</Text>

        <Text style={{
        fontSize:subTitleSize,
        fontFamily:FONTS.regular,
        color:COLORS.primary
      }}>{subtitle}</Text>
    </View>
  )
}


export const EthPrice = ({price}) => {
    return (
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image source={assets?.eth} resizeMode='contain' style={{
            width:20,
            height:20,
            marginRight:2,
        }}/>
        <Text style={{
            fontFamily:FONTS.medium,
            fontSize:SIZES.font,
            color:COLORS.primary
        }}>{price}</Text>
      </View>
    )
  }

  export const ImageCmp = ({imgUrl,i}) => {
    return (
     <Image source={imgUrl} resizeMode="contain" style={{
        width:48,
        height:48,
        marginLeft: i===0?0:SIZES.font,
     }}/>
    )
  }

  export const People = () => {
    return (
      <View style={{flexDirection:'row'}}>
        {[assets.person01,assets.person02,assets.person03,assets.EthPrice].map((imgUrl,i)=>(
            <ImageCmp imgUrl={imgUrl} i={i} key={`people-${i}`}/>
        ))}
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View style={{
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.font,
        justifyContent:'center',
        alignItems:'center',
        ...SHADOWS.light,
        elevation:1,
        maxWidth:'50%',
        
      }}>
      <Text style={{
        fontFamily:FONTS.regular, 
        fontSize:SIZES.small,
        color:COLORS.primary}}>
            Ending in
        </Text>

        <Text style={{
        fontFamily:FONTS.semiBold, 
        fontSize:SIZES.medium,
        color:COLORS.primary}}>
            12h 30m
        </Text>
      </View>
    )
  }

  export const SubInfo = () => {
    return (
      <View style={{
        width:'100%',
        paddingHorizontal:SIZES.font,
        marginTop:SIZES.extraLarge,
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
       <People />
       <EndDate/>
      </View>
    )
  }