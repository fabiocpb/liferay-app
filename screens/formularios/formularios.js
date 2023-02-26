import React from "react";
import { 
    View, 
    Text, 
    ScrollView
} from 'react-native';
import CustomButtonDoacoes from '../../components/CustomButtonDoacoes/CustomButtonDoacoes';
import styles from "../../screens/stylesApp";

export default function Formularios({navigation}) {

    const onSignInPressed = () => {
       console.warn('FORMULÁRIO DE DOAÇÕES')
       navigation.navigate('FormDoacoes')
   }

   const onSignInPressed2 = () => {
       console.warn('HISTÓRICO DE DOAÇÕES');
       navigation.navigate('FormHistDoacoes')
   }

   return(
       <ScrollView style={styles.buttonScreenDoacao} showsVerticalScrollIndicator={false}>
           <View>
               <Text style={styles.titleButtonDoacao}>DOAÇÕES</Text>
                   <View style={styles.containerDoacao}>     
                           <CustomButtonDoacoes
                               ftWeight= 'bold'
                               text='FORMULÁRIO DE DOAÇÕES' 
                               onPress= {onSignInPressed} 
                               bgColor= '#0B63CE'
                               fgColor= '#fff'
                           /> 
                           <CustomButtonDoacoes 
                               ftWeight= 'bold'
                               text='HISTÓRICO DE DOAÇÕES' 
                               onPress= {onSignInPressed2} 
                               bgColor= '#0B63CE'
                               fgColor= '#fff'
                           /> 
                   </View>
           </View>
       </ScrollView>
   );
  /*  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Doacao />
     </View>
   ); */
 }