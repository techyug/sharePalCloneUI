import { StyleSheet, Text, View ,Image,Pressable} from 'react-native'
import React from 'react'


 export default function CategoryCard(props) {
  const item = props.data.item;
 

  return (
    <Pressable style={styles.card}
    onPress = {()=>{
      delete item.items;
      props.pressHandler(item)
    }}
    >
      <Image source={{ uri:item.category_image }} style={{ height: 200, width: 170, backgroundColor: 'transparent' }} />
      <Text style={styles.categoryName}>{item.category_short_name}</Text>
      <View style={styles.yellowBack} />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  yellowBack:{ height: 200, width: 200, borderRadius: 100, position: 'absolute', zIndex: -10, alignSelf: 'center', bottom: -100, backgroundColor: 'rgb(215,223,35)' },
  categoryName:{ fontWeight: '700', color: 'black', fontSize: 20 },
  card:{ height: 250, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', borderRadius: 8, borderWidth: 1, borderColor: 'lightgray', elevation: 5, backgroundColor: 'white' }
})
