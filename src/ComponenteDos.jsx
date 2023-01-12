import { useState } from 'react'

    function ComponenteDos(telefono) {
        let cliente = {
        'username': 'Jose',
        'telefono': telefono
    
    }
        return(
            <>
            <h1>Username 2: {cliente.username}</h1>
            <h1>Telefono 2: {cliente.telefono}</h1>
            </>
        )
    }
    


export default ComponenteDos
