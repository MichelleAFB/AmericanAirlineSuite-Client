
import { createSlice} from '@reduxjs/toolkit'


const initialState= {
  showNavbar:false
}

export const navbarSlice = createSlice({
  name:'showNavbar',
  initialState,
  reducers: {
    visibleNavbar: (state) => {
      state.showNavbar = true
    },
    hideNavbar: (state) => {
      state.showNavbar=false
    }
  }
})


export const {visibleNavbar,hideNavbar} = navbarSlice.actions

export default navbarSlice.reducer