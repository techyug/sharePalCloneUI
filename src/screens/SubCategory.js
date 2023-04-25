import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../constants/baseURL'
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';

export default function SubCategory(props) {
  const item = props.route.params
  console.log(item)
const [data,setData] = useState([]);
const navigation = useNavigation()
  const sampleData =
    [{ "category_url": "trekking-gear-on-rent", "created_at": 1662060470043, "id": 77, "options": 3, "sc_image": "https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/trekking-shoes-on-rent-sharepal-1_g3GKYTly_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677592287513", "sc_image_alt_text": "SharePal's category page of Trekking Gear on rent showing image of a sub-category called Trekking Shoes on rent", "sc_name": "Trekking Shoes", "sc_name_ri": "Trekking Shoes", "sc_order": 1, "seo_desc": "Rent Trekking Shoes from SharePal - India's most loved lifestyle gear rental platform. Affordable rates, fast delivery, & top-notch customer service", "url": "trekking-shoes-on-rent" }, { "category_url": "trekking-gear-on-rent", "created_at": 1662060469991, "id": 75, "options": 10, "sc_image": "https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/trekking-jackets-on-rent-sharepal-1_g8LJhtikw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677660911615", "sc_image_alt_text": "SharePal's category page of Trekking Gear on rent showing image of a sub-category called Trekking Jackets on rent", "sc_name": "Trekking Jackets", "sc_name_ri": "Trekking Jackets", "sc_order": 2, "seo_desc": "Rent Trekking Jackets from SharePal - India's most loved lifestyle gear rental platform. Affordable rates, fast delivery, & top-notch customer service", "url": "trekking-jackets-on-rent" }, { "category_url": "trekking-gear-on-rent", "created_at": 1662060470092, "id": 79, "options": 11, "sc_image": "https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/trek-accessories-on-rent-sharepal-1_jpxy-PJdk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677592287549", "sc_image_alt_text": "SharePal's category page of Trekking Gear on rent showing image of a sub-category called Trek Accessories on rent", "sc_name": "Trek Accessories", "sc_name_ri": "Trek Accessories", "sc_order": 4, "seo_desc": "Rent Trek Accessories from SharePal - India's most loved lifestyle gear rental platform. Affordable rates, fast delivery, & top-notch customer service", "url": "trek-accessories-on-rent" }, { "category_url": "trekking-gear-on-rent", "created_at": 1662060470023, "id": 76, "options": 4, "sc_image": "https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/backPacks-on-rent-sharepal-1_l1H4tIGXW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677592287156", "sc_image_alt_text": "SharePal's category page of Trekking Gear on rent showing image of a sub-category called BackPacks on rent", "sc_name": "Trekking Backpacks", "sc_name_ri": "Backpacks", "sc_order": 3, "seo_desc": "Rent BackPacks from SharePal - India's most loved lifestyle gear rental platform. Affordable rates, fast delivery, & top-notch customer service", "url": "backpacks-on-rent" }]
  useEffect(()=>{

    // fetch(baseURL+"subcategory?category_url="+item.url).then(response => response.json()).then(data=>{
    //  setData(data)
    // }).catch(err=>{
    //   console.log(err)
    // })
  },[])


  return (
    <View style={{ flex: 1,paddingHorizontal:10,backgroundColor:'white' }}>
      <FlatList
        data={sampleData}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row',overflow:'hidden', justifyContent: 'space-between', padding: 10, margin: 5,backgroundColor:'white',borderWidth:1,borderColor:'lightgray' }}>
            <View style={{ width: 100, height: 200, backgroundColor: 'rgb(215,223,35)', zIndex: -10, position: 'absolute', right: 0 }} />
            <View style={{justifyContent:'space-evenly'}}>
              <Text style={{fontSize:24,color:'black'}} >{item.sc_name}</Text>
              <Text style={{paddingHorizontal:10,backgroundColor:'white',textAlign:'center',alignSelf:'flex-start',borderWidth:1,borderRadius:5,padding:10,borderColor:'lightgray'}}>{item.options}+ Products</Text>
            </View>
            <Image source={{ uri: item.sc_image }} style={{ height: 120, width: 120 }} resizeMode='contain' />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})