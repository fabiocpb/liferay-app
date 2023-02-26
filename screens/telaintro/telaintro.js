import React from 'react';
import { View, Image, ScrollView } from 'react-native';

export default function TelaIntro({navigation}) {
    const Tap = () => {
      console.warn('Entrar');
      navigation.navigate('Login');
  }

  return(
      <ScrollView showsVerticalScrollIndicator={false} style={{  backgroundColor: '#ffff' }}>
          <View style={styles.containerLogo}>
              <Image style = {styles.logo} source = {require('../../assets/logo2.jpg')} onPress={Tap} />
          </View>
      </ScrollView>
  );
}