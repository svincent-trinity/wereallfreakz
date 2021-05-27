import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import { EmojiPickerView } from './views/EmojiPicker';
import { ChatView } from './views/Chat';


const pubnub = new PubNub( {
  subscribeKey: 'sub-c-f8777042-0563-11eb-ac24-4e38869d876d',
  publishKey: 'pub-c-572801b2-8339-435c-a5ba-04bac36ac146'
} );
console.disableYellowBox = true;
const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <PubNubProvider client={ pubnub }>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Choose" component={ EmojiPickerView } />
        <Stack.Screen name="We're All Freaks" component={ ChatView } />
      </Stack.Navigator>
    </PubNubProvider>
  </NavigationContainer>
  );
}
