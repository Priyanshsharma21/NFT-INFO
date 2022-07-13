import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import React,{useState} from 'react'

export default function App() {
  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const handleGoal = ()=>{
    setCourseGoals(prevGoals => [...prevGoals, {key:Math.random().toString(), item : enterGoal}]) // adding new goals in previous goals
  }

  return (
    //view is like div
    <View style={styles.container}>
     <View 
     style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <TextInput
        onChangeText={(value)=>setEnterGoal(value)}
        value={enterGoal} 
        placeholder='Enter Goal here' 
        style={{color:'gray', width:'80%', borderColor:'black', borderWidth:1, padding:20}}/>

        <View style={{color:"red", backgroundColor:"red"}}>
          <Button 
          onPress={handleGoal}
          title='+'
          />
        </View>
        {/* ScrollViwe weadd whare we want our component to be scrollable
        Flatlist ius the component is the component which is more effecient than scroolview */}
        <FlatList data={courseGoals} renderItem={goal =>(
         <>
            <Text>{goal.item.item}</Text>
            <Button title='-' onPress={handelPress} />
         </>
        )} /> // this replace map
        

     </View>

    

    </View>
  );
}
// styling in reactnative  done using js
const styles = StyleSheet.create({
  container:{
    padding:50, flexDirection:'row', justifyContent:'center'
  },
});
