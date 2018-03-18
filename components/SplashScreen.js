import React , {Component} from 'react';
import {View , Text , Button} from 'react-native';

class SplashScreen extends Component{
    static navigationOptions = {
        title: 'Splash'
    }
    constructor(props){
        super(props);
        this.state = {
            timer: 3
        }
        setInterval(()=>{
            this.setState({timer: this.state.timer - 1})
        },1000)
    }

    render(){
        return(
            <View>
                <Text>Welcome deck app in : {this.state.timer}</Text>
            </View>
        )
    }
}


export default SplashScreen;