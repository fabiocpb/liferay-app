import React, {useState} from "react";
import { 
    View, 
    Text, 
    ScrollView,
    TextInput,
    Pressable
} from 'react-native';
import styles from "../../screens/stylesApp";

export default function TelaformDoacao(){
    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [estado, setEstado] = useState();
    const [city, setCity] = useState();
    const [donation, setDonation] = useState();
    const registerUrl = "none";
  
  
    function sendButton() {
      const postInst = async () => {
          const connectAPI = await fetch(registerUrl, { method: 'POST',  body: JSON.stringify({
            cityInstitution: city,
            countryInstitution: country,
            emailInstitution: email,
            nameInstitution: name,
            phoneNumberInstitution: phone,
            stateInstitution: estado,
            value: donation
          }),
              headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }})
  
          return connectAPI;
      };
      postInst().then((response) => {
          console.log(response);
          if (response.status === 201) {
            console.warn("Formulário Criado!")
              }
              else {
                console.warn("Formulário Não Criado, Erro com algum campo!")
              }
      })
  
    };
  
    return (
    <ScrollView style={styles.homeScreenFormDoacao}>
      <View>
        <Text style={styles.titleHomeFormDoacao}>FORMULÁRIO DE DOAÇÃO</Text>
              <TextInput style={styles.containerFormDoacao} placeholder="Nome da Instituição" value={name} onChange={e => setName(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Email da Instituição" value={email} onChange={e => setEmail(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Cidade da Instituição" value={city} onChange={e => setCity(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Estado da Instituição" value={estado} onChange={e => setEstado(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder=" País da Instituição" value={country} onChange={e => setCountry(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Telefone da Instituição" value={phone} onChange={e => setPhone(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Valor da Doação" value={donation} onChange={e => setDonation(e.target.value)}/>
  
              <Pressable>
                <Text style={styles.sendButtonFormDoacao} onPress={sendButton}>Enviar</Text>
              </Pressable>
      </View>
    </ScrollView>
    );
        //containerFormDoacao
      /* return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <FormDoacao />
        </View>
      ); */
    }