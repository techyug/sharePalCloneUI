import { StyleSheet, Text, View, Image ,Pressable} from 'react-native'
import React from 'react'
// import { Icon } from '@rneui/themed';
import Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SubCategoryCard(props) {
  const item = props.data;
const navigation  = useNavigation()
  return (
    <Pressable key={item.id} style={styles.card}  >
      
      <Image source={{ uri: item.ri_image }} style={styles.image} resizeMode='contain' />
      <View style={{position:'absolute',right:10,top:10}}>
      <Icon
        name='heart-outline'
        size={25}
        
      />
      <Icon name='md-share-social-outline' size={25}  />
      </View>
      <View>
      <Text numberOfLines={1} style={{ textAlign: 'left', fontWeight: '700',color:'black',marginVertical:5 }}>{item.ri_short_name}</Text>
      <Text numberOfLines={1} >{item.product_qualities}</Text>
      <View style={{flexDirection:'row',alignItems:'flex-end',marginVertical:5}}>
        <Text style={{color:'blue',fontSize:19,fontWeight:'700'}}> {"\u20B9"}{ item.per_trip_rent==0?item.base_rent+item.per_day_rent*props.forDays : item.base_rent+ props.forTrips * item.per_trip_rent }</Text>
        <Text> for {item.per_trip_rent==0?props.forDays + " day" +( props.forDays>1?'s':"") : props.forTrips + " " + "trip"+( props.forTrips>1?'s':"")}</Text>
      </View>
      <View style={styles.viewProduct}>
        <Text style={{color:'blue'}}>View Product</Text>
      </View>
      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  image:{ height: 120, width: 170, alignSelf: 'center' },
  viewProduct:{flex:1,borderWidth:1,borderColor:'blue',margin:5,backgroundColor:'white',padding:6,justifyContent:'center',alignItems:'center',borderRadius:10},
  card:{ width: 190, borderRadius: 10,marginHorizontal:10,borderWidth:1,borderColor:'lightgray', backgroundColor: 'white', elevation: 0, margin: 5, justifyContent: 'space-between' ,padding:15}
})