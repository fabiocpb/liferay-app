import React, {useState} from "react";
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from "../../screens/stylesApp";
import Home from '../../screens/home/home';

export default function PerfilUsuario() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </View>
    );
  }
