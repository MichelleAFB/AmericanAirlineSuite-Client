import {combineReducers} from 'redux'
import {eventReducer} from './events/events-reducer'
import navbarReducer from '../features/navbar/navbarSlice'

export const rootReducer = combineReducers({
  storeEvent:eventReducer,
  showNavbar:navbarReducer,
})

console.log(rootReducer)

//export default rootReducer