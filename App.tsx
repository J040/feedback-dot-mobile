import 'react-native-gesture-handler';

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, View, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { theme } from './src/theme';
import * as SplashScreen from 'expo-splash-screen';

import Widget from './src/components/Widget'; // Quando não especificamos o arquivo, o "index" é usado

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    { children }
  </TouchableWithoutFeedback>
)

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  const param = { ios: () => 0, android: () => 200 };
  return (
    <DismissKeyboard>
    {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}> */}
    {/* <KeyboardAvoidingView behavior="position" style={{height: Platform.OS === 'android' ? Dimensions.get('window').height - StatusBar.length : '100%'}}> */}
    {/* <KeyboardAvoidingView> */}
    {/* <KeyboardAvoidingView behavior='padding'
      keyboardVerticalOffset={
        Platform.select({
          android: 200,
        })
    }> */}
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>

        <StatusBar style="light" backgroundColor='transparent' translucent />

        <Widget />
        
      </View>

    {/* </KeyboardAvoidingView> */}
    </DismissKeyboard>
  );
}

