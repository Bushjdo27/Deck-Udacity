import React , {Component} from 'react';
import {
    View , 
    TouchableOpacity ,
    Text , 
    FlatList , 
    StyleSheet , 
    AsyncStorage} from 'react-native';
import {connect} from 'react-redux'


class Deck extends Component{
    static navigationOptions = {
        title:"Decks"
    }
    constructor(props){
        super(props);
        this.state = {
          data: {},
          titleDeck:[]
        }
      }
    makeQuiz = (deck)=>{
        console.log("in makeQuiz function")
        this.props.navigation.navigate('Quiz',{
            questions: deck.questions
        })
    }
    renderItem = ({item})=>{
        const {data} = this.props;
        
        return (
            <TouchableOpacity 
                style={{padding: 10 , backgroundColor:'#fff'}}
                onPress={()=>{
                    this.props.navigation.navigate('Details',{
                        singleDeck: data[item]
                    })
                }}
            >
                <Text>{data[item].title}</Text>
                <Text>have : {data[item].questions.length} question</Text>
            </TouchableOpacity>
        )
    }
    render(){
        const {data} = this.props;
        return(
            <View>
            {data ?
            <FlatList 
                data={Object.keys(data)}
                renderItem={this.renderItem}
                keyExtractor={(title , index)=> index}
            />
            :<Text>Loading...</Text>}
             
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}


export default connect(mapStateToProps)(Deck);
// {titleDeck.length > 0 && titleDeck.map((title , index)=>{
//     return (
//       <TouchableOpacity 
//       style={{padding: 10 , backgroundColor:'#fff'}}
//       key={index} 
//       onPress={()=>{
//           this.makeQuiz(data[deck])}}
//           >
//         <Text>{data[deck].title}</Text>
//         <Text>have : {data[deck].questions.length} question</Text>
//       </TouchableOpacity>
//     )
//   })}