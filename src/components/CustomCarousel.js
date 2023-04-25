import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 250,
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  yellowBack: {
    height: 350,
    alignSelf: 'center',
    width: 350,
    borderRadius: 175,
    backgroundColor: 'rgb(215, 223, 35)',
    position: 'relative',
    bottom: '50%',
    zIndex: -10,
  },
  dotContainer: {
    alignSelf:'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    position: 'absolute',
    bottom: 10,
    
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    elevation:3,
  },
});

export const CustomCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextIndex();
    }, 3000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [index]);

  const nextIndex = () => {
    if (images.length > 1) {
      setIndex((index + 1) % images.length);
    }
  };

  const prevIndex = () => {
    if (images.length > 1) {
      setIndex((index + images.length - 1) % images.length);
    }
  };

  const Dots = () => {
    return (
      <View style={[styles.dotContainer]}>
        {images.map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.dot, { backgroundColor: i === index ? 'blue' : 'lightgray' }]}
            onPress={() => setIndex(i)}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{position:'absolute',width:'100%',paddingHorizontal:10,top:'40%',flexDirection:'row',justifyContent:'space-between',zIndex:100,}} >
      
      <Icon name='chevron-back' size={25} style={{elevation:5}} color='blue' onPress={prevIndex} />
      <Icon name='chevron-forward-outline' style={{elevation:5}} color='blue' size={25} onPress={nextIndex} />
        
      </View>
      
      <Image source={{ uri: images[index] }} style={{ height: 250, width: '100%' }} resizeMode="contain" />
      <Dots />
      <View style={styles.yellowBack} />
    </View>
  );
};
