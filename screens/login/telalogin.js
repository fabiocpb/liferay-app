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

//Tela de Login (ainda estou testando modulação para diminuir o código)

export default function TelaLogin({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onSignInPressed = () => {
        console.warn('Submit');
        navigation.navigate('Navbar');
    }
  
    const onForgotPasswordPressed = () => {
        console.warn('Esqueceu a sua senha?');
    }
  
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{  backgroundColor: '#0d6efd' }} >
            <View style={styles.containerLogoLogin}>
                    <Image style={styles.logoLogin} source={require('../../assets/images/liferay-logo.png')}/>
                    <Text style={styles.tituloLogin}>Doações</Text>
                
                <CustomInput 
                    placeholder = 'Email' 
                    value= {email} 
                    setValue={setEmail} 
                    />
                <CustomInput 
                    placeholder = 'Password' 
                    value= {password} 
                    setValue={setPassword} 
                    secureTextEntry
                    />  
                <View style={{alignItems: 'flex-end', minWidth: '100%'}}>
                    <CustomButton 
                        text='Esqueceu a sua senha?' 
                        onPress= {onForgotPasswordPressed} 
                        type= 'TERTIARY'
                        fgColor= '#fff'
                    />  
                </View>
                <CustomButton 
                    ftWeight= 'bold'
                    text='Submit' 
                    onPress= {onSignInPressed} 
                    bgColor= '#fff'
                /> 
  
            </View>
        </ScrollView>
    );
  
  
    /* return (
      <View style={{flex:1, backgroundColor: '#0d6efd' }}>
        <Login />
      </View>
    ); */
  }