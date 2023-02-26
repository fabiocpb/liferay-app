import React, {useState, useEffect} from "react";
import { 
    View, 
    Text, 
    ScrollView,
    TextInput,
    Pressable
} from 'react-native';
import styles from "../../screens/stylesApp";

export default function EdicaoDoacao({ route, navigation }){

    const [formList, setFormList] = useState();
    const [name, setName] = useState("");
    const [donation, setDonation] = useState();
    const doacaoid = "none";
    const update = "none";
  
    const { id } = route.params;

    //Url de pegar por Id antiga
     //const connectAPI = await (await fetch(`https://coding-liferay.herokuapp.com/api/v1/form/get/${id}`))

    const get = async () => {
      const connectAPI = await (await fetch(doacaoid));
      const data = await connectAPI.json();
      return data;
    };

    useEffect(() => {
      
      get().then((response) => {
        setFormList(response);
        console.log(response)
      });
    }, [])
  
    function sendButton() {
      const { id } = route.params;
      const putInst = async () => {
        //url update antiga
        //`https://coding-liferay.herokuapp.com/api/v1/form/put/update/lean/${id}`

          const connectAPI = await fetch(update, { method: 'PUT',  body: JSON.stringify({
            nameInstitution: name,
            value: donation
          }),
              headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }})
  
          return connectAPI;
      };
      putInst().then((response) => {
          console.log(response);
          if (response.status === 201) {
            console.warn("Formulário editado")
            navigation.navigate("FormHistDoacoes");
              }
              else {
                console.warn("Formulário Não Editado, Erro com algum campo!")
              }
      })
  
    };
  
  
    return (
    <ScrollView style={styles.homeScreenFormDoacao}>
      <View>
        <Text style={styles.titleHomeFormDoacao}>EDIÇÃO DO FORMULÁRIO </Text>
        <Text style={styles.titleHome}>FORMULÁRIO DE DOAÇÃO</Text>
              <TextInput style={styles.containerFormDoacao}  placeholder= {formList?.institution.name} defaultValue={name} onChange={e => setName(e.target.value)}/> 
              <TextInput style={styles.containerFormDoacao}  defaultValue={formList?.value} onChange={e => setDonation(e.target.value)}/>
              <Pressable>
                <Text style={styles.sendButtonFormDoacao} onPress={sendButton}>Enviar</Text>
              </Pressable>
      </View>
    </ScrollView>
    );
  }; 