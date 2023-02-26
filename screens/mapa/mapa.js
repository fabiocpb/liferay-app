import React from 'react';
import { View } from 'react-native';
import {WebView} from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import styles from "../../screens/stylesApp";

const iframe = 'https://www.google.com/maps/d/u/3/embed?mid=1dKPQ8Rw0iNrfELbQ7kYHCn2HHV9hM-w&ehbc=2E312F'

export default function Mapa() {

    return (
      <View style={styles.containerMapa}>
        <View style= {{width:'100%', height: '100%'}}>
          <WebView
            source= {{uri: iframe}}
            onLoad= {console.log('Loaded!')}
          />
      </View>
        <StatusBar style="auto" />
    </View>
    );
  }