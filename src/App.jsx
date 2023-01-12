import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComponenteUno from './ComponenteUno'
import ComponenteDos from './ComponenteDos'

let telefono1 = 666666661
let telefono2 = 666666662

function App() {

    return (
      <>
      { ComponenteUno(telefono1)}
      { ComponenteDos(telefono2)}
      </>
    )

}

export default App
