import React , {Component} from 'react';
import {Text , View , Button} from 'react-native';


class QuizScreen extends Component {

    static navigationOptions = {
        title: 'Quiz'
    }
    constructor(props){
        super(props);
        this.state = {
            currentQuestion: 0,
            Questions: []
        }
    }
    componentDidMount(){
        const {params} = this.props.navigation.state;
        if(params){
            this.setState({Questions: params.questions})
        }
    }

    render(){
        const {currentQuestion , Questions} = this.state;
        return (
            <View>
            {Questions.length > 0 && <View>
                <Text>Question : {`${this.state.currentQuestion + 1} / ${this.state.Questions.length}`}</Text>
                <View>
                    <Text>{this.state.Questions[currentQuestion].question}</Text>
                    <Text>{Questions[currentQuestion].answer}</Text>
                </View>
                <Button 
                    title="Next Question"
                    onPress={()=>{
                        this.setState({currentQuestion: currentQuestion + 1})
                    }}
                    disabled={(currentQuestion + 1) === Questions.length ? true : false}
                />
            </View>}
            </View>
        )
    }

}


export default QuizScreen