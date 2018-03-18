import React , {Component} from 'react';
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native';

class DeckDetails extends Component {
    static navigationOptions = {
        title:"Details"
    }
    constructor(props){
        super(props);
        this.state = {
            Deck:{}
        }
    }
    componentDidMount(){
        const Deck = this.props.navigation.state.params.singleDeck;
        this.setState({Deck})
    }
    render(){
        
        console.log(this.state.Deck.questions)
        return(
            <View style={styles.container}>
                <Text>{this.state.Deck.title}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text>Add Question</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={[styles.btn , {backgroundColor:'#333'}]}
                onPress={()=>{
                    this.props.navigation.navigate('Quiz',{
                        questions: this.state.Deck.questions
                    })
                }}
                >
                    <Text style={{color:'#fff'}}>Make Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',
        flex:1
        
    },
    btn:{
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        borderColor:'#333'
    },
    
})
export default DeckDetails;