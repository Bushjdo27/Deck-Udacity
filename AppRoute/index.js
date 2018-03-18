import React , {Component} from 'react'
import {StackNavigator} from 'react-navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {getDecks ,addDeck} from '../actions/index'
import reducer from '../reducers'
import Deck from '../components/Deck';
import SplashScreen from '../components/SplashScreen';
import QuizScreen from '../components/QuizScreen';
import DeckDetails from '../components/DeckDetails';

const MainStack = StackNavigator({
    Deck:{
        screen: Deck
    },
    Details:{
        screen:DeckDetails
    },
    Quiz:{
        screen:QuizScreen
    }
},{
    initialRouteName: 'Deck',
    navigationOptions:{
        headerTitleStyle:{
            fontWeight:'normal'
        }
    }
})
const store = createStore(reducer);

getDecks().then((result)=>{
    store.dispatch(result)
})
export default class MainRoute extends Component{
    render(){
        return (
            <Provider store={store}>
                <MainStack />
            </Provider>
        )
        
    }
}