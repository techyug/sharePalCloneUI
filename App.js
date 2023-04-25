
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './src/navigators/MyStackNavigator';
import Header from './src/components/Header';
import BottomNav from './src/components/BottomNav';
import { WhatsappAndCartLogo } from './src/components/WhatsappAndCart';
import { useState } from 'react';
import CustomOverLay from './src/components/CustomOverLay';

export default function App() {
  const [overLayes, setOverLayes] = useState(["account", "offers", 'search', 'city', 'videoRequest', 'categories', 'whatsapp', 'cart'])
  const [hideAll, setHideAll] = useState(true)
  const [isOverlayVisible, setIsOverlayVisible] = useState(-1);
  
  const handleOverlayPress = (index) => {
    setIsOverlayVisible(index);
  };

  return (
    <NavigationContainer>
      <Header onPress={(num) => handleOverlayPress(num)} />

      <MyStackNavigator />

      {overLayes.map((item, index) => (
        <CustomOverLay key={item} data={item} onBackDropPress = {()=>handleOverlayPress(-1)}  isVisible={isOverlayVisible === index} />
      ))}

      <WhatsappAndCartLogo onPress={(num) => handleOverlayPress(num)} />

      <BottomNav onPress={(num) => handleOverlayPress(num)}  />
      
    </NavigationContainer>
  );
}