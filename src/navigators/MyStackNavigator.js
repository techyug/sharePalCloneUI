import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import SubCategory from '../screens/SubCategory';
const Stack = createNativeStackNavigator();

function MyStackNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"  component={HomeScreen} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name='SubCategory' options={{
        headerShown:false,animation:'slide_from_right'
      }}component={SubCategory}/>
    
    </Stack.Navigator>
  );
}
export default MyStackNavigator;