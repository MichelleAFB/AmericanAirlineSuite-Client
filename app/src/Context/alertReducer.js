
import NavBar from "../components/NavBar"
const alertReducer = (state,action) => {
   
  switch(action.type){
    case 'SET_ALERT':
      //console.log("ALERT")
      return action.payload
    case 'REMOVE_ALERT':
      //console.log("RWEMOVE ALERTR")
      return null
     default:
      return state 
   }
}

export default alertReducer