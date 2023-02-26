import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//telas

import TelaLogin from '../../screens/login/telalogin';
import PerfilUsuario from '../../screens/usuario/perfilusuario';
import Formularios from '../../screens/formularios/formularios';
import TelaformDoacao from '../../screens/formularios/formdoacoes';
import EdicaoDoacao from '../../screens/formularios/edicaodoacao';
import TelaHistDoacoes from '../../screens/formularios/histdoacoes';
import Mapa from '../../screens/mapa/mapa';
import Ajuda from '../../screens/ajuda/ajuda';
import TelaIntro from '../../screens/telaintro/telaintro';
import PerguntasFrequentes from '../../screens/ajuda/perguntasfrequentes';
import TermosECondicoes from '../../screens/ajuda/termosecondicoes';
import LogoLiferay from '../../screens/logo/logo';

const tabOptions = {
  headerTitle: () => <LogoLiferay/>,  
  headerStyle: { backgroundColor: '#0B63CE'},
  headerTintColor: 'white',
  headerTitleStyle: {
      fontWeight: 'bold',
  }
};

const tabOptionsHide= {
  headerTitle: () => <LogoLiferay/>,  
  headerStyle: { backgroundColor: '#0B63CE'},
  headerTintColor: 'white',
  headerTitleStyle: {
      fontWeight: 'bold',
  },
  headerShown: false
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Tela de navegação interna ao histórico de doações

function EditHistDoacoes(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="FormHistDoacoes" component={TelaHistDoacoes} options={{ headerShown: false }}/>
          <Stack.Screen name="EdicaoDoacao" component={EdicaoDoacao} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );  
  }


  //Telas de ajuda e termos de uso

function AjudaeTermos(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="AjudaMain" component={Ajuda} options={tabOptionsHide} />
          <Stack.Screen name="FAQ" component={PerguntasFrequentes} options={{ headerShown: false }}/>
          <Stack.Screen name="Termos" component={TermosECondicoes} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );  
  }

  //Navbar de formularios de doação

function Forms(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="Formularios" component={Formularios} options={tabOptionsHide} />
          <Stack.Screen name="FormDoacoes" component={TelaformDoacao} options={{ headerShown: false }}/>
          <Stack.Screen name="FormHistDoacoes" component={EditHistDoacoes} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );  
  }

//Navbar central (perfil, formulários, mapa e etc.)

function Navbar() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Usuário') {
                        iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                        color = "white";
                        size = 34;
                    } else if (route.name === 'Formulários') {
                        iconName = focused ? 'document-text' : 'ios-document-text-outline';
                        color = "white";
                        size = 34; 
                    } else if (route.name === 'Mapa') {
                        iconName = focused ? 'ios-map' : 'ios-map-outline';
                        color = "white";
                        size = 34;
                    } else if (route.name === 'Ajuda') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        color = "white";
                        size = 34; 
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel:false,
            tabBarStyle: { backgroundColor: "#0B63CE", height: 63},
          })}
        
        >
            <Tab.Group>
                <Tab.Screen name="Usuário" component={PerfilUsuario} options={tabOptions} />
                <Tab.Screen name="Formulários" component={Forms} options={tabOptions} />
                <Tab.Screen name="Mapa" component={Mapa} options={tabOptions} />
                <Tab.Screen name="Ajuda" component={AjudaeTermos} options={tabOptions} />
            </Tab.Group>
        </Tab.Navigator>
    );
  }

//Navbar mestra(intro, login e acesso à navbar central)

export default function intro(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Intro" component={TelaIntro} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }}/>
          <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }