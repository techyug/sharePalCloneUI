import { View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';


export const WhatsappAndCartLogo = ({onPress}) => (
    <View style={{ position: 'absolute', right: 20, bottom: 70, zIndex: 10 }} >
      <Icon name='cart' size={35} onPress={()=>onPress(7)}  color='white' style={{ borderRadius: 20, backgroundColor: 'blue', padding: 10, elevation: 5, marginVertical: 10 }} />
      <Icon name='logo-whatsapp' size={35} onPress={()=>onPress(6)} color='white' style={{ borderRadius: 20, backgroundColor: 'green', padding: 10, elevation: 5 }} />
    </View>
  )