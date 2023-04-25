import { StyleSheet, Text, View, Image, FlatList, Alert, Pressable } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import React from 'react'
import { categories } from '../sampleData/AllData';
import { CustomCarousel } from '../components/CustomCarousel';
import SubCategoryCard from '../components/SubCategoryCard';
import CategoryCard from '../components/CategoryCard';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const navigation = useNavigation()
  const images = [
  "https://ik.imagekit.io/faskf16pg/Home/sharepal-rentals-1_lJiOAM6z6.png?updatedAt=1679260484308",
  "https://ik.imagekit.io/faskf16pg/Home/sharepal-rentals-10_yYk20CuESc.png?updatedAt=1679260484292",
  "https://ik.imagekit.io/faskf16pg/Home/sharepal-rentals-8_1q5GwFFPEy.png?updatedAt=1679260484265"

]
  const pressHandler = (data) => {
    navigation.navigate('SubCategory', data)
  }
  return (
    <FlatGrid
      style={{ flex: 1, backgroundColor: 'white' }}
      itemDimension={150}
      ListHeaderComponent={() =>
        <>
          <CustomCarousel images={images} />
          <Text style={{textAlign:'center',fontSize:21,fontWeight:'700', color:'black',marginVertical:10}} >What do you want to rent?</Text>
        </>
      }
      ListFooterComponent={(props) =>
      (
        categories.map((item, index) => (
          <View key={item.category_id} style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 21, fontWeight: '700', textAlign: 'center', color: 'black' }} >{item.category_short_name}</Text>

            <FlatList horizontal
              data={item.items}
              renderItem={({ item }) => (
                <SubCategoryCard data={item} forDays={6} forTrips={1} />
              )}
            />
          </View>
        )
        )
      )
      }
      data={categories}
      renderItem={(data) =>
        <View>
          <CategoryCard data={data} pressHandler={pressHandler} />
        </View>
      }
    />



  )
}

const styles = StyleSheet.create({})