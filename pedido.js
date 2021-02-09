/**
 * Programación Funcional
 */

// USUARIOS
let usuario = {
    nombre: 'Pepe',
    edad: 41
}

// Pedido Actual
let pedido = []
let codigos = document.getElementById ('codigos')



// VAMOS HACER QUE EL CLIENTE PUEDA PEDIR LA COMIDA

const pedirComida = cod => {
    
    //si el cliente quiere salir, hacemos el siguiente condicional
    if (preguntaComida === 'SALIR') return alert ('Gracias por su visita')

    // si el campo esta vacio, hacemos un condicional diciendole que el codigo no es valido
    if (!cod) return alert ('Disculpe, el codigo que has introducido no es valido, asegurese de que escribes bien los codigos.')

    //Encontraremos el codigo del producto con una constante arrow function
    const productoEncontrado = CARTA.find(producto => producto.cod === cod)

    //Error en el codigo del producto
    if(!productoEncontrado) return alert('Lo sentimos este producto no existe')

    // Hacer mas dinamico lo que el cliente ha pedido
    pedido.push(productoEncontrado)
    return alert(`Usted ha pedido: ${productoEncontrado.nombre}`)

}

// que el cliente pueda ver el pedido
const verPedido = () => pedido

// vamos a calcular el coste del pedido

const calcularPedido = () => {
    let total = 0 // estamos haciendo un reset
    for ( producto of pedido){
        total += producto.precio 
    }
    return total
}


// VAMOS A INICIAR NUESTRA APP PARA QUE LOS CLIENTES LA PUEDAN USAR



do {
    preguntaComida = prompt(`Hola ${usuario.nombre}, puedes hacer tu pedido.\nIntroduce el codigo del producto que desee, recuerda que los codigos del producto se hacen de uno en uno: (Escriba SALIR cuando hayas terminado de pedir tu pedido)`).toUpperCase()

    pedirComida(preguntaComida)
} while (preguntaComida !== 'SALIR')

alert(`Su total es: ${calcularPedido()}€. Gracias por su visita, eperamos volver a verle pronto`)