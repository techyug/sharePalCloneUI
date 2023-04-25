import { Text } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/themed';

export default function CustomOverLay({data,onBackDropPress,isVisible}) {
  return (
    <Overlay isVisible={isVisible} onBackdropPress={onBackDropPress}  >
        <Text>{data}</Text>
    </Overlay>
  )
}
