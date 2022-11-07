

import axios from 'axios'


export const events= axios.get('http://localhost:3002/sendEventstoFront', (req,res) => {

  if(res){
    return res.data
  }
})