import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNav({onPress}) {
    return (
        <View style={{ position: 'relative', marginTop: 0, borderTopWidth: 1, height: 60, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', backgroundColor: 'white', bottom: 0, zIndex: 10 }}>
            <Icon name='apps-sharp' onPress={()=>onPress(5)} size={25} color={'black'} />
            <Icon name='md-card-outline'  onPress={()=>onPress(1)} size={25} />
            <Icon name='search'  onPress={()=>onPress(2)} size={25} />
            <Icon name='ios-videocam'  onPress={()=>onPress(4)} size={25} />
            <MaterialCommunityIcons name='account'  onPress={()=>onPress(0)} size={25} />
        </View>
    )
}

const styles = StyleSheet.create({})