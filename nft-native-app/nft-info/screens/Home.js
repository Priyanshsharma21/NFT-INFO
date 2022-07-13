import { StyleSheet, Text, View,FlatList,SafeAreaView} from 'react-native'
import React,{useEffect,useState} from 'react'
import {COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";


const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (value)=>{
      if(!value.length) return setNftData(NFTCard)

      const filterData = NFTData?.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))

      if(filterData.length){
        setNftData(filterData);
      }else{
        setNftData(NFTData)
      }

      
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar backgroundColor={COLORS?.primary} />
    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 0 }}>
        <FlatList
          data={nftData}
          renderItem={({ item }) => <NFTCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
        />
         {/* <FlatList // view like a  div
         data={NFTData} //map function take array
         renderItem={({item})=> <NFTCard data={item}/>} //callback inside map
         keyExtractor={(item)=>item.id} //should provide s key
         showsVerticalScrollIndicator={false} // dont want that scroll bar
         listHeaderComponent = {<HomeHeader />} // component that will render above all
        /> */}
      </View>

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View
          style={{ height: 300, backgroundColor: COLORS?.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS?.white }} />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Home
