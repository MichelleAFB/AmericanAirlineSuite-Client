import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import selectedEventReducer from '../features/events/selectedEventSlice'
import navbarReducer from '../features/navbar/navbarSlice'
import reducer from '../features/events/reducer'




export const store = configureStore({

  reducer: {
    counter:counterReducer,
    showNavbar:navbarReducer,
    //selectedEventRedux:selectedEventReducer,
    reducer:reducer
    
  }
})
console.log(selectedEventReducer)