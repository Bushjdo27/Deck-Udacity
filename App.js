import React from 'react';
import { StyleSheet, Text, View , AsyncStorage} from 'react-native';
import Deck from './components/Deck'
const DATA = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
    // AsyncStorage.setItem('Data',JSON.stringify(DATA)).then(()=>{
    //   console.log('Add Success')
    // })
    AsyncStorage.getItem('Data').then((result)=>{
      const data = JSON.parse(result);
      this.setState({data})
      console.log("Get item success")
    }).catch((e)=>{
      console.log('Cant not read data')
    })
  }
  render() {
    const {data} = this.state
    return (
      <View style={styles.container}>
          {data && Object.keys(data).map((deck , index)=>{
            return (
              <View key={index}>
                <Text>{data[deck].title}</Text>
                <Text>have : {data[deck].questions.length} question</Text>
              </View>
            )
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;