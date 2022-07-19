import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import MainPage from './pages/mainPage';
import StartPage from './pages/startPage';
import colors from "./constants/colors";
import react from 'react';
import { render } from 'react-dom';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  
  const [nameValue, setNombre] = useState('');
  const [ageValue, setAge] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  
  if (!loaded) {
    return <AppLoading/>;    
  }
  
  let content = <MainPage
                  nameValue={nameValue}
                  ageValue={ageValue}
                />

  const onHandlerButton = () => {
    alert('Nombre: '+nameValue+' Edad: '+ageValue);
    return 
      <MainPage
        nameValue={nameValue}
        ageValue={ageValue}
      />  
  }

 

  if(!confirmed){
    content = <StartPage 
                nameValue={nameValue}
                ageValue={ageValue}
                confirmed={confirmed}
                setNombre={setNombre}
                setAge={setAge}
                setConfirmed={setConfirmed}
                onHandlerButton={onHandlerButton}
              />
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Vista Principal</Text>
      
      { content }

    </View>


  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    backgroundColor: colors.back,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',

  },
  title:{
    fontSize: 30,
    color: colors.accent,
    fontFamily: 'OpenSans'
  }
});
