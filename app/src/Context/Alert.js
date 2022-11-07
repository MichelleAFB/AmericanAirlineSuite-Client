import React from 'react'
import AlertContext from './alertContext'
import {useContext} from 'react'

function Alert() {

  const {alert} = useContext(AlertContext)
  return (
    alert !== null && (<div>Alert</div>)
  )
}

export default Alert