import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import CustomButtonAjuda from "../../components/Ajuda/CustomButton";
import styles from "../../screens/stylesApp";

export default function Ajuda({navigation}) {
    const onSignInPressed = () => {
      console.warn('PERGUNTAS FREQUENTES');
      navigation.navigate("FAQ");
  }

  const onSignInPressed2 = () => {
      console.warn('TERMOS E CONDIÇÕES DE USO');
      navigation.navigate("Termos");
  }

  return(
      <ScrollView style={styles.buttonScreenAjuda} showsVerticalScrollIndicator={false}>
          <View>
              <Text style={styles.titleButtonAjuda}>AJUDA</Text>
                  <View style={styles.containerAjuda}>     
                          <CustomButtonAjuda
                              ftWeight= 'bold'
                              text='PERGUNTAS FREQUENTES' 
                              onPress= {onSignInPressed} 
                              bgColor= '#0B63CE'
                              fgColor= '#fff'
                          /> 
                          <CustomButtonAjuda 
                              ftWeight= 'bold'
                              text='TERMOS E CONDIÇÕES DE USO' 
                              onPress= {onSignInPressed2} 
                              bgColor= '#0B63CE'
                              fgColor= '#fff'
                          /> 
                  </View>
          </View>
      </ScrollView>
);
  /* return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Liferay App</Text>
    </View>    
  ); */
}