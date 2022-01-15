import React, { useState } from "react"
import {
  StyleSheet,View,
  Text, TouchableOpacity,FlatList, ActivityIndicator
} from 'react-native';

import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context";


const Investigation = () =>{
  const navigation = useNavigation();
  const [proyect,setProyect] = useState([
    {name: 'Proyecto 1',id:'1'},
    {name: 'Proyecto el patito',id:'2'},
    {name: 'Proyecto 3',id:'3'},
    {name: 'Proyecto 4',id:'4'},
    {name: 'Proyecto 5',id:'5'},
    {name: 'Proyecto 6',id:'6'},
    {name: 'Proyecto 7',id:'7'},
    {name: 'Proyecto 8',id:'8'},
    {name: 'Proyecto 9',id:'9'},
    {name: 'Proyecto 10',id:'10'},
  ])
  const [refFlatList,setrefFlatList] = useState();
  const [currentIndex, setCurrentIndex] = useState();
  onClickItem = (item,index) => {
    setCurrentIndex(index);
    const newArrData =  proyect.map((e,index) =>{
      if(item.id == e.id){
        return{
          ...e,selected:true
        }
      }
        return{
          ...e,
          selected:false
        }

    })
    setProyect(newArrData);

  }
  renderItem = ({item,index})=>{
    return(
      <TouchableOpacity 
      onPress={()=>onClickItem(item,index)}
      style={[
        styles.item,{marginTop:11,height:150,backgroundColor:item.selected ? '#0096D6':'white'}
      ]}
      
      > 
      <Text style = {styles.item}>{item.name}</Text>

      </TouchableOpacity>
    )
  }

  onScrollToItemSelected=()=>{
    refFlatList.scrollToIndex({animated:true,index:currentIndex})

  }
  getItemLayout = (proyect,index) => {
    return {length: 161, offset: 161 * index,index}
  }

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={proyect}
        renderItem={renderItem} 
     
        keyExtractor={item => `key-${item.id}`}
        getItemLayout={getItemLayout}
        ref = {(ref) => setrefFlatList(ref)}
        />
      <TouchableOpacity onPress={() => navigation.navigate('Sección de evidencias')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{'Agregar Evidencia'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


export default Investigation

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});


