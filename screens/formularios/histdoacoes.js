import React, {useState, useEffect} from "react";
import { 
    View, 
    Text, 
    ScrollView
} from 'react-native';
import styles from "../../screens/stylesApp";
import HistoricCard from '../../components/HistoricCard/historicCard';

export default function TelaHistDoacoes() {
  
    /*
    data.nameInstitution
    data.cityInstitution
    data.value
    data.id
       */
  
      const [formList, setFormList] = useState();
      const getdoacoes = "none";
  
     
  
      const get = async () => {
        /*
         Url antiga para pegar doações
        'https://coding-liferay.herokuapp.com/api/v1/form/get/all'
         const connectAPI = await (await fetch(getdoacoes));
        const data = await connectAPI.json(); */
        const data = [
          {
              nameInstitution: "Imip",
              cityInstitution: "hellcife",
              value: 10,
              id: 1
          },
        
          {
              nameInstitution: "Hospital das Clinicas",
              cityInstitution: "raincife",
              value: 20,
              id: 2
          },
        ];
        return data;
      };
  
      useEffect(() => {
        
        get().then((response) => {
          setFormList(response);
          console.log(response)
        });
      }, [])
  
        return (
          <ScrollView style={styles.homeScreenHistDoacao}>
            <View>
              <Text style={styles.titleHomeHistDoacao}>REGISTRO DE DOAÇÕES</Text>
              <View >
                {formList?.map((info) => 
                <HistoricCard
                nameInstitution={info.nameInstitution}
                value={info.value}
                id={info.id}
                nomeTela="EdicaoDoacao"
                />)}
              </View>
              
            </View>
          </ScrollView>
          );
        };
  