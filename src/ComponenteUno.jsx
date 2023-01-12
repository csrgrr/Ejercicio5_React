import { useState } from 'react' 





function ComponenteUno(telefono) {
    let cliente = {
        'username': 'Jose',
        'telefono': telefono
    }
    return(
        <>
        <h1>Username 1: {cliente.username}</h1>
        <h1>Telefono 1: {cliente.telefono}</h1>
        </>
    )
}

export default ComponenteUno