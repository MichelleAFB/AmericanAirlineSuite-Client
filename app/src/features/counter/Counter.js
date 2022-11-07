import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch} from "react-redux"
import {increment, decrement, reset,incrementByAmount} from './counterSlice'


const Counter = () => {

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount,setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset())

  }
  return (
    <div>
      <p>{count}</p>
      <button className="registerLink"onClick={() => dispatch(increment())}>+</button>
      <button className="registerLink" onClick={() => dispatch(decrement())}>-</button>
      <input 
        type = "text"
        value={incrementAmount}
        onChange ={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))} className="registerLink">
          add value
        </button>
        <button classNmae="registerLink" onClick={()=> dispatch(reset())}>
            reset all
        </button>


    </div>
  )
}

export default Counter