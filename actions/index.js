import {AsyncStorage} from 'react-native';
import {
    ALL_DECK,
    KEY_DATA
} from './ConstantsName'
export async function getDecks(){
    const result = await AsyncStorage.getItem(KEY_DATA);
    const data = JSON.parse(result);
    return {
        type:ALL_DECK,
        payload: data
    }
    
}

export async function addDeck(){
    const newData = {
        Bushjdo: {
            title: 'Bushjdo',
            questions: [
              {
                question: 'Does he handsome ?',
                answer: 'true'
              },
              {
                question: 'Does he wonderfull ?',
                answer: 'true'
              }
            ]
          }
    }
    AsyncStorage.mergeItem(KEY_DATA , JSON.stringify(newData))
    .then((data)=>{
        console.log(data);
        AsyncStorage.getItem(KEY_DATA).then((result)=>{
            console.log(JSON.parse(result))
        })
    })
}