import {ALL_DECK} from '../actions/ConstantsName'
const handleDeck = (state ={} , action)=>{
    switch(action.type){
        case ALL_DECK:
            return{...state , ...action.payload}
        
        default:
            return state;
    }

}
export default handleDeck