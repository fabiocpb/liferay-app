import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Termos from '../../components/Ajuda/Termos';
import styles from "../../screens/stylesApp";

export default function TermosECondicoes() {
    return (
    <ScrollView style={styles.termosScreen}>
        <View>
            <View>
                <Text style={styles.titleTermos}>TERMOS E CONDIÇÕES</Text>
            </View>
  
            <Termos />
        </View>
    </ScrollView>
  );
  };