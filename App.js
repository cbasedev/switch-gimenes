import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import mainPage from './pages/mainPage';
import react from 'react';
import startPage from './pages/startPage';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  
  //Declaración y carga Asíncrona de fuentes
  
  const [loaded] = useFonts({
    Cabin: require('./assets/fonts/Cabin-Regular.ttf'),
    CabinBold: require('./assets/fonts/Cabin-Bold.ttf'),
    CabinItalic: require('./assets/fonts/Cabin-Italic.ttf'),
  });

  if(!loaded) return <AppLoading/>


  const [nameValue, setNombre] = useState('')
  const [ageValue, setAge] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  let content = <mainPage/>

  if(!confirmed){
    content = <startPage/>
  }

  return (
    
    <View style={styles.container}>

        {content}

    </View>


  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
