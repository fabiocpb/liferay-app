import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Perguntas from '../../components/Ajuda/Perguntas';
import styles from "../../screens/stylesApp";

export default function PerguntasFrequentes() {
    return (
    <ScrollView style={styles.perguntasFrequentesScreen}>
        <View>
            <View>
                <Text style={styles.titlePerguntas}>PERGUNTAS USUAIS</Text>
            </View>

            <Perguntas />
        </View>
  </ScrollView>
  );
};