import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { city } from '../sampleData/AllData';
export default function Header({onPress}) {
    function SharePalLogo() {
        return (
          <View style={styles.sharePalLogo}>
              <Image source={require('../sampleData/logo.png')} style={{width:150,maxHeight:'100%'}} resizeMode='contain' />
              <Pressable 
              onPress={()=>onPress(3)}
              style={styles.city}>
                <Text style={styles.cityName}>{city[0].city_name}  </Text>
                <Icon name='caret-down' size={20} color={'black'}/>
              </Pressable>
          </View>
        )
    }
    return (
        <View style={styles.header} >
            <SharePalLogo />
            <View>
                <MaterialCommunityIcons onPress={()=>onPress(0)} name='account' size={50} color='blue' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cityName:{textAlign:'center',alignSelf:'center',color:'black'},
    sharePalLogo:{width:200,height:70,flexDirection:'row',alignItems:'center'},
    city:{marginHorizontal:10,flexDirection:'row',padding:5,borderRadius:6,backgroundColor:'lightgray'},
    header:{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'lightgray' },
})