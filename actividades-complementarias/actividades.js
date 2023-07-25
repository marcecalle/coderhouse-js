//! EJERCICIO 1

//* Actividad 1 (HOMERO)

// let firstName
// let lastName
// let age

// firstName   = 'Homer'
// lastName    = 'Simpson'
// age         = 40

//* Actividad 2 (CIUDADES)

// const city1 = 'Springfield'
// const city2 = 'Shelbyville'
// const city3 = 'Ogdenville'
// const city4 = 'Cypress Creek'
// const city5 = 'North Havenbrook'

//* Actividad 3 (CARNET)

// let idNumber   = 'B47U89RE243'
// let fullName       = 'BART SIMPSON'
// let address    = '742 EVERGREEN TERR'
// let city       = 'SPRINGFIELD'
// let birthDate  = '02-11-70'
// let sex        = 'M'
// let height     = '4.0'
// let eyes       = 'BL'
// let weight     = '85'

// let carnet     = 
//       'Numero de ID: ' + idNumber + ' '
//    +  'Nombre: ' + fullName + ' '
//    +  'Domicilio: ' + address + ' '
//    +  'Ciudad: ' + city + ' '
//    +  'Fecha de Nacimiento: ' + birthDate + ' '
//    +  'Sexo: ' + sex + ' '
//    +  'Altura: ' + height + ' '
//    +  'Color de ojos: ' + eyes + ' '
//    +  'Peso: ' +  weight

// console.log(carnet)

//* Actividad 4 (REGISTRO DE PERSONAS)

// let member1 = prompt('Ingrese el nombre de un/una integrante de la familia');
// let member2 = prompt('Ingrese el nombre de un/una integrante de la familia');
// let member3 = prompt('Ingrese el nombre de un/una integrante de la familia');
// let member4 = prompt('Ingrese el nombre de un/una integrante de la familia');
// let member5 = prompt('Ingrese el nombre de un/una integrante de la familia');

// alert('Integrantes de la familia: '
//       + member1 + ', '
//       + member2 + ', '
//       + member3 + ', '
//       + member4 + ', '
//       + member5 + '.')

//* Actividad 5 (DESCUENTOS)

// let priceA = parseFloat(prompt('Ingrese el precio al que aplicar el descuento.'))
// let discount = Number(prompt('Ingrese el monto del descuento: '))
// let finalPrice = priceA - ((discount * priceA) / 100)
// console.log('El precio final con descuento es: $' + finalPrice)

//! EJERCICIO 2

//* Actividad 1 (YO NO FUI)

// let name1 = 'Nelson'
// let name2 = prompt('Ingrese un nombre')

// if (name2 === name1) {
//    alert('Fuí yo')
// } else {
//    alert('Yo no fuí')
// }

//* Actividad 2 (PRESIONAR Y)

// let letter = prompt('Ingrese una letra:')
// if (letter === 'y' || letter === 'Y') {
//    alert('Correcto')
// } else {
//    alert('Error')
// }

//* Actividad 3 (ESCOGER PERSONAJE)

// let option = Number(prompt('Elige una opción entre 1, 2, 3 y 4.'))
// if (option === 1) {
//    console.log('Elegiste a Homero');
// } 
// if (option === 2) {
//    console.log('Elegiste a Marge');
// }
// if (option === 3) {
//    console.log('Elegiste a Bart');
// }
// if (option === 4) {
//    console.log('Elegiste a Lisa');
// } else {
//    alert('Error!')
// }

//* Actividad 4 (PRESUPUESTO)

// let number = Number(prompt('Ingrese un número'))
// if ((number >= 0) && (number <= 1000)) {
//    console.log('Presupuesto bajo.')
// } else if ((number > 1000) && (number <= 3000)) {
//    console.log('Presupuesto medio.')
// } else if (number > 3000) {
//    console.log('Presupuesto alto.');
// } else {
//    console.log('Error!');
// }

//* Actividad 5 (VACÍO)

// let product1 = prompt('Ingrese producto de alamacén 1:')
// let product2 = prompt('Ingrese producto de alamacén 2:')
// let product3 = prompt('Ingrese producto de alamacén 3:')
// let product4 = prompt('Ingrese producto de alamacén 4:')

// if ((product1 !== '') && (product2 !== '') && (product3 !== '') && (product4 !== '')) {
//    alert(
//       'Los productos son: '
//       + product1 + ', '
//       + product2 + ', '
//       + product3 + ', '
//       + product4 + '.')
// } else {
//    alert('Error: Es necesario cargar todos los productos')
// }

//! EJERCICIO 3

//* Actividad 1 (EL PIZARRON)

// let counter = Number(prompt('Ingrese la cantidad de repeticiones que desea.'))
// let text    = prompt('Ingrese el texto que desea repetir.')

// for (let index = 0; index < counter; index++) {
//    alert(text);
// }

//* Actividad 2 (EL CUADRADO ORDINARIO)

// let counter = Number(prompt('Ingrese la cantidad de repeticiones que desea.'))

// for (let index = 0; index < counter; index++) {
//    if (index >= 4) {
//       break
//    } else {
//       alert('lado')
//    }
// }

//* Actividad 3 (REGISTRO DE ALUMNOS)

// let counter = 10
// let alumnos = ''

// for (let index = 0; index < counter; index++) {
//    alumnos += prompt('Ingrese el nombre del alumno: ') + '\n'
// }
// alert(alumnos)

//* Actividad 4 (EL INNOMBRABLE)

// let nameList  = ''
// let inputName = ''

// while (inputName !== 'Voldemort') {
//    inputName = prompt('Ingrese un nombre a listar. (para salir mencione al "innombrable")')
//    if (inputName !== 'Voldemort') {
//       nameList +=  inputName + '\n'
//    } else {
//       alert('Dijiste su nombre!')
//    }
// }
// alert(nameList)

//* Actividad 5 (COMPRANDO PRODUCTOS)

// let product = ''
// let  inputNumber = ''

// while (inputNumber !== 'ESC') {
//    inputNumber = prompt('Ingrese un némero entre 1 y 4 para seleccionar un producto. (Ingrese "ESC" para salir)')
//    switch (inputNumber) {
//       case '1':
//          product += 'Tomate' + '\n'
//          break;

//       case '2':
//          product += 'Papa' + '\n'
//          break;

//       case '3':
//          product += 'Carne' + '\n'
//          break;

//       case '4':
//          product += 'Pollo' + '\n'
//          break;
         
//       case 'ESC':
//          break;

//       default:
//          alert('Ingrese una opción valida')
//          break;
//    }
// }
// alert('Los productos ingresados son:\n' + product)

//! EJERCICIO 4

//* Actividad 1 (ENTRADAS Y SALIDAS)

// function entry() {
//    let num = Number(prompt('Ingrese un valor entero.'))
//    return num
// }

// function prosecution(value) {
//    value += value * 2
//    return value
// }

// function output(result) {
//    alert('el resultado es: ' + result)
// }

// output(prosecution(entry()))

//* Actividad 2 (REDONDEO)

// let input 

// function rounding(number) {
//    return Math.round(number) 
// }

// for (let index = 0; index < 5; index++) {
//    input = parseFloat(prompt('Ingrese un número no entero.'))
//    alert('El número ingresado se redondeo a: ' + rounding(input));
// }

//* Actividad 3 (IMPUESTOS)

// function tax(price, percent) {
//    return price += (percent * price) / 100
// }

// for (let index = 0; index < 5; index++) {
//    let price = parseFloat(prompt('Ingrese el precio del producto por favor.'))
//    let percent = parseFloat(prompt('Ingrese el porcentaje del impuesto por favor.'))
//    alert('El precio final con impuestos es: ' + tax(price, percent));
// }

//* Actividad 4 (COTIZACIÓN)

// const dollarPrice = 350

// function quoteDollar(pesos) {
//    return pesos / dollarPrice
// }

// function quotePeso(dollar) {
//    return dollar * dollarPrice
// }
// let input = prompt("Seleccione la opción deseada: \n 1- Dolares a Pesos \n 2- Pesos a Dolares ")
// let value = prompt('Importe a cambiar:')

// switch (input) {
//    case '1':
//       alert(quotePeso(value))
//       break;
//    case '2':
//       alert(quoteDollar(value))
//       break;

//    default:
//       break;
// }

//* Actividad 5 (VALIDACIÓN)

// function validation(string) {
//    return string !== ""
// }
// let input = prompt('Ingresar una cadena de texto. (para salir tipear "ESC".)')

// while (input !== 'ESC') {
//    alert(validation(input))
//    input = prompt('Ingresar una cadena de texto. (para salir tipear "ESC".)')
// }

//! EJERCICIO 5

//* Actividad 1 (LA TIENDA)

// class Shop {
//    constructor(shopName, address, owner, category) {
//       this.shopName = shopName
//       this.address  = address
//       this.owner    = owner
//       this.category = category 
//    }
// }

// const shop01 = new Shop('Musimundo', 'Rivadavia 18300', 'Sr. Musimundo', 'Electronica')
// const shop02 = new Shop('Fravega', 'San Martín 7400', 'Sr. Fravega', 'Electronica')
// const shop03 = new Shop('Burguer', 'Rosas 540', 'Sra. Burguer', 'Alimentos')

// console.log(shop01);
// console.log(shop02);
// console.log(shop03);

//* Actividad 2 (REGISTRO DE TIENDAS)

// class Shops {
//    constructor(shopName, address, owner, category) {
//       this.shopName = shopName
//       this.address  = address
//       this.owner    = owner
//       this.category = category 
//    }
// }

// let inputShop = ''

// for (let index = 0; index < 2; index++) {
//    const shop = new Shops(
//       prompt('Ingresar nombre de la tienda: '),
//       prompt('Ingresar dirección de la tienda: '),
//       prompt('Ingresar nombre del dueño de la tienda: '),
//       prompt('Ingrese rubro de la tienda: '))

//    inputShop +=
//    `Tienda: ${shop.shopName}
//    Dirección: ${shop.address}
//    Propietarios: ${shop.owner}
//    Rubro: ${shop.category}\n`
// }

// alert(inputShop)

//* Actividad 3 (ABIERTO Y CERRADO)

// class Shop {
//    constructor(shopName, address, owner, category) {
//       this.shopName = shopName
//       this.address  = address
//       this.owner    = owner
//       this.category = category 
//    }
//    open(inputHour) {
//       if ( ((inputHour >= 8) && (inputHour <= 12)) || ((inputHour >= 15) && (inputHour <= 19)) ){
//          alert('Abierto')
//       } else {
//          alert('Cerrado')
//       }
//    }
// }
// const shop = new Shop('KFC', 'Rosas 690', 'Sr. KFC', 'Comida rapida')

// for (let index = 0; index < 3; index++) {
//    let hour = Number(prompt('Ingrese un horario: '))
//    if (shop.open(hour)) {
//       alert(shop.open(hour))
//    } else {
//       alert(shop.open(hour))
//    }
// }

//* Actividad 4 (VALIDAR PROPIETARIO)

// class Shop {
//       constructor(shopName, address, owner, category) {
//          this.shopName = shopName
//          this.address  = address
//          this.owner    = owner
//          this.category = category 
//       }
//       open(inputHour) {
//          if ( ((inputHour >= 8) && (inputHour <= 12)) || ((inputHour >= 15) && (inputHour <= 19)) ){
//             alert('Abierto')
//          } else {
//             alert('Cerrado')
//          }
//       }
//       isOwner(name) {
//          if (name === this.owner) {
//             return true
//          } else {
//             return false
//          }
//       }
//    }

// const shop01 = new Shop('Musimundo', 'Rivadavia 18300', 'Sr. Musimundo', 'Electronica')
// const shop02 = new Shop('Fravega', 'San Martín 7400', 'Sr. Fravega', 'Electronica')
// const shop03 = new Shop('Burguer', 'Rosas 540', 'Sra. Burguer', 'Alimentos')

// for(let i = 0; i < 5; i++) {
//    let inputName = prompt('Ingrese el nombre del dueño de la tienda:')
//    if (shop01.isOwner(inputName)) {
//       alert(`${inputName} es el/la dueño/a de la tienda ${shop01.shopName}.`)
//    }
//    if (shop02.isOwner(inputName)) {
//       alert(`${inputName} es el/la dueño/a de la tienda ${shop02.shopName}.`)
//    }
//    if (shop03.isOwner(inputName)) {
//       alert(`${inputName} es el7la dueño/a de la tienda ${shop03.shopName}.`)
//    }
// }

//* Actividad 5 (EL CLIENTE)

// class Client {
//    constructor(name, budget, giftCard, phoneNumber) {
//       this.name = name
//       this.budget = budget
//       this.giftCard = giftCard
//       this.phoneNumber = phoneNumber
//    }
//    moneyTransfer(value) {
//       if ((value < this.budget) && (value > 0)) {
//          this.budget = this.budget - value
//          alert('El total fue debitado satisfactoriamente de su presupuesto')
//       } else {
//          alert('No se puede hacer la transferencia.')
//       }
//    }
// }

// const client1 = new Client('Marcelo', 10000, false, '1123334444')
// const client2 = new Client('Paula', 15000, false, '1123335555')
// const client3 = new Client('Jazmin', 40000, true, '1123336666')

// for(let i = 0; i < 5; i++) {
//    let total = parseFloat(prompt('Ingrese el total a debitar de su presupuesto.'))
//    client1.moneyTransfer(total)
//    client2.moneyTransfer(total)
//    client3.moneyTransfer(total)
// }

//! EJERCICIO 6

//* Actividad 1 (EL EQUIPO)

// const playersNames = ['Apu', 'Homer', 'Moe', 'Burns']

// for(let i = 0;i < 4; i++) {
//    alert(`El nombre del jugador es: ${playersNames[i]} y la posición es: ${[i]}`)
// }

// for(let playerName of playersNames) {
//    alert(playerName)
// }

//* Actividad 2 (CARGA EL EQUIPO)

// const playersNames = []

// let inputName = prompt('Ingrese el nombre del jugador.\n(Para salir ingrese "ESC")')

// while(inputName !== "ESC") {
//    playersNames.push(inputName)
//    inputName = prompt('Ingrese el nombre del jugador.\n(Para salir ingrese "ESC")')
// }

// for(let i = 0; i < playersNames.length; i++) {
//    alert(`El nombre del jugador es: ${playersNames[i]} y la posición es: ${[i]}`)
// }

//* Actividad 3 (JUGADORES)

// class Player {
//    constructor(playerName, number, age, injury) {
//       this.playerName = playerName
//       this.number     = number
//       this.age        = age
//       this.injury     = injury
//    }
// }

// const players = []

// players.push(new Player('Bart', 15, 10, true))
// players.push(new Player('Nelson', 2, 11, false))
// players.push(new Player('Ralph', 8, 8, false))
// players.push(new Player('Lisa', 10, 8, true))
// players.push(new Player('Milhouse', 7, 11, false))

//* Actividad 4 (BUSCAR JUGADOR)

// class Player {
//    constructor(playerName, number, age, injury) {
//       this.playerName = playerName
//       this.number     = number
//       this.age        = age
//       this.injury     = injury
//    }
// }

// const players = []

// players.push(new Player('Bart', 15, 10, true))
// players.push(new Player('Nelson', 2, 11, false))
// players.push(new Player('Ralph', 8, 8, false))
// players.push(new Player('Lisa', 10, 8, true))
// players.push(new Player('Milhouse', 7, 11, false))

// function playerFinder(team, player) {
//    return team.find(elemento => elemento.playerName === player)
// }

// for(let i = 0; i < 3; i++) {
//    let input = playerFinder(players, prompt('Ingrese nombre del jugador que seda buscar.'))
//    if(input !== undefined) {
//       alert(`Jugador: ${input.playerName} Camiseta: ${input.number} Edad: ${input.age}`)
//    } else {
//       alert('No existe jugador con ese nombre.')
//    }
// }

//* Actividad 5 (FILTRAR JUGADORES)

// class Player {
//    constructor(playerName, number, age, injury) {
//       this.playerName = playerName
//       this.number     = number
//       this.age        = age
//       this.injury     = injury
//    }
// }

// const players = []

// players.push(new Player('Bart', 15, 10, true))
// players.push(new Player('Nelson', 2, 11, false))
// players.push(new Player('Ralph', 8, 8, false))
// players.push(new Player('Lisa', 10, 8, true))
// players.push(new Player('Milhouse', 7, 11, false))
// players.push(new Player('Rod', 66, 10, false))
// players.push(new Player('Todd', 6, 8, true))

// function playerFilter(team, age) {
//    return team.filter(elemento => elemento.age === age)
// }

// console.log(playerFilter(players, Number(prompt('Ingerse la edad que desea filtrar'))))

//! EJERCICIO 7

//* Actividad 1 (EL VISITANTE)

// let key = localStorage.getItem('nombre')
// if (key === null) {
//    localStorage.setItem('nombre', prompt('Ingresar nombre de usuario.'))
// } else {
//    alert('El nombre es: ' + key)
// }

//* Actividad 2 (ALMACENAR EN EL MENU)

// let comidas = localStorage.getItem('comidas')

// if(comidas === null) {
//    const menu = []
//    for(let i = 0; i < 5; i++) {
//       menu.push(prompt('Ingrese una comida:'))
//    }
//    localStorage.setItem('comidas', menu)
// } else {
//    let menu = ''
//    const arrayComidas = comidas.split(',')
//    for(const nombreComida of arrayComidas) {
//       menu += nombreComida + '\n'
//    }
//    alert(menu)
// }

//* Actividad 3 (ALMACENAR HAMBURGUESA)

// class Hamburguesa {
//    constructor(nombre, precio, ingredientes, numeroCombo) {
//       this.nombre       = nombre
//       this.precio       = precio
//       this.ingredientes = ingredientes
//       this.numeroCombo  = numeroCombo
//    }
// }

// const hamburguesas = []

// hamburguesas.push(new Hamburguesa('Krusty Burguer', 2600, 'Pepino y cebolla', 1))
// hamburguesas.push(new Hamburguesa('Cuarto de libra', 3500, 'Chedar y salsa', 2))
// hamburguesas.push(new Hamburguesa('Big Mac', 3000, 'Pepino, tomate y cebolla', 3))
// hamburguesas.push(new Hamburguesa('Whopper', 3200, 'Pepino', 4))
// hamburguesas.push(new Hamburguesa('Provoking', 2500, 'Lechuga y tomate', 5))

// const hamburguesasJSON = JSON.stringify(hamburguesas)

// localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas))

//* Actividad 4 (COMPRAR HAMBURGUESA)

// const hamburguesasJSON = JSON.parse(localStorage.getItem('hamburguesas'))

// let listadoHamburguesa = 'Elegir HAMBURGUESA\n'
// for (let i = 0; i < hamburguesasJSON.length; i++) {
//    listadoHamburguesa += `${i} -> ${hamburguesasJSON[i].nombre} (${hamburguesasJSON[i].ingredientes}) $ ${hamburguesasJSON[i].precio}\n`
// }
// alert(listadoHamburguesa)
// let entradaCliente = parseInt(prompt('Ingrese el numero de Hamburguesa que desea comprar:'))
// if((entradaCliente >= 0) && (entradaCliente < hamburguesasJSON.length)) {
//    alert(`La opción elegida es: ${hamburguesasJSON[entradaCliente].nombre}`)
// } else {
//    alert(`Error de selección`)
// }

//* Actividad 5 (AUMENTAR PRECIOS)

// const hamburguesasJSON = JSON.parse(localStorage.getItem('hamburguesas'))

// let sumarIva = (precio) => precio * 1.30

// for(let i = 0; i < hamburguesasJSON.length; i++) {
//    hamburguesasJSON[i].precio = sumarIva(hamburguesasJSON[i].precio) 
// }
// console.log(hamburguesasJSON)
// localStorage.setItem('hamburguesas', JSON.stringify(hamburguesasJSON))

//! EJERCICIO 8

//* Actividad 1 (BIENVENIDO A...)

// const ciudades = [
//    'Springfield',
//    'Shelbyville',
//    'Cypress Creek',
//    'Bronson',
//    'Brockway',
//    'Ogdenville'
// ]

// for (const ciudad of ciudades) {
//    let h2 = document.createElement('h2')
//    h2.innerHTML = ciudad
//    document.body.appendChild(h2)
// }

//* Actividad 2 (LA LISTA)

// const tareas = []

// for (let i = 0; i < 5; i++) {
//    tareas.push(prompt('Ingresar tarea:'))
// } 

// let ul = document.createElement('ul')
// let items = ''
// for (const tarea of tareas) {
//    items += `<li>${tarea}</li>`
// }
// ul.innerHTML = items
// document.body.appendChild(ul)

//* Actividad 3 (ELEGIR DESTINO)

// const paises = [
//    'Argentina',
//    'India',
//    'China',
//    'Uruguay',
//    'Brasil',
//    'Japón'
// ]

// let select = document.createElement('select')
// let pais = ''
// for (let i = 0; i < paises.length; i++) {
//    pais += `<option value="${i}">${paises[i]}</option>`
// }
// select.innerHTML = pais
// document.body.appendChild(select)

//* Actividad 4 (LA BANDA)

// class Cantante {
//    constructor(nombre, edad, pais) {
//       this.nombre = nombre
//       this.edad   = edad
//       this.pais   = pais
//    }
// }

// const cantantes = []

// cantantes.push(new Cantante('Homer', 40, 'USA'))
// cantantes.push(new Cantante('Apu', 38, 'India'))
// cantantes.push(new Cantante('Barney', 41, 'USA'))
// cantantes.push(new Cantante('Gorgory', 39, 'Irlanda'))
// cantantes.push(new Cantante('Skinner', 37, 'USA'))

// for (const cantante of cantantes) {
//    let div = document.createElement('div')
//    div.innerHTML =
//       `<h2>${cantante.nombre}</h2>
//       <p>${cantante.edad} - (${cantante.pais})</p>
//       <hr>`
//    document.body.appendChild(div)
// }

//* Actividad 5 (BOTÓN CONTRATAR)

// class Cantante {
//    constructor(nombre, edad, pais, id) {
//       this.nombre = nombre
//       this.edad   = edad
//       this.pais   = pais
//       this.id     = id
//    }
// }

// const cantantes = []

// cantantes.push(new Cantante('Homer', 40, 'USA', 1))
// cantantes.push(new Cantante('Apu', 38, 'India', 2))
// cantantes.push(new Cantante('Barney', 41, 'USA', 3))
// cantantes.push(new Cantante('Gorgory', 39, 'Irlanda', 4))
// cantantes.push(new Cantante('Skinner', 37, 'USA', 5))

// for (const cantante of cantantes) {
//    let div = document.createElement('div')
//    div.innerHTML =
//       `<h2>${cantante.nombre}</h2>
//       <p>${cantante.edad} - (${cantante.pais})</p>
//       <button id="${cantante.id}">Contratar</button>
//       <hr>`
//    document.body.appendChild(div)
// }

//! EJERCICIO 9

//* Actividad 1 (BOTÓN DEL NÚCLEO)

// let div = document.createElement('div')
// div.innerHTML = 
//       `
//       <span>
//          <button id="btnNucleo">CORE DESTRUCT</button>
//       </span>
//       `
// document.body.appendChild(div)
// let boton = document.getElementById('btnNucleo')

// // Opción 1
// // boton.addEventListener('click', accionClick => {alert('Para liberar presión del NÚCLEO ingrese "YES"')})

// // Opción 2
// boton.onclick = accionClick => {alert('Libere la presión del NÚCLEO')}

//* Actividad 2 (ELEGIR ASIGNATURA)

// const asignaturas = ['Lengua', 'Naturales', 'Sociales', 'Matemáticas']

// let select = document.createElement('select')
// let asignatura = ''

// for (let i = 0; i < asignaturas.length; i++) {
//    asignatura += `<option value="${i}">${asignaturas[i]}</option>`
// }

// select.innerHTML = asignatura
// document.body.appendChild(select)

// let h4 = document.createElement('h4')
// select.addEventListener('change', function (e) {
//    h4.innerHTML = asignaturas[e.target.value]
//    console.log(e.target);
//    document.body.appendChild(h4)
// })

//* Actividad 3 (ALTA DE ESTUDIANTE)

// const estudiantes = []
// class Estudiante {
//    constructor(nombre, apellido, dniNumero) {
//       this.nombre    = nombre
//       this.apellido  = apellido
//       this.dniNumero = dniNumero
//    }
// }

// let formularioAlta = document.getElementById('formulario')
// formularioAlta.addEventListener('submit', validarFormulario)
// function validarFormulario(evt) {
//    evt.preventDefault()
//    let inputs = evt.target.children

// estudiantes.push(new Estudiante(inputs[0].value, inputs[1].value, inputs[2].value))
// let h3 = document.createElement('h3')
// h3.innerHTML  = 
//    `
//    USUARIO REGISTRADO
//    `
// document.body.appendChild(h3)
// console.log(estudiantes);
// }

//* Actividad 4 (LISTAR ESTUDIANTES)

// const estudiantes = []
// class Estudiante {
//    constructor(nombre, apellido, dniNumero) {
//       this.nombre    = nombre
//       this.apellido  = apellido
//       this.dniNumero = dniNumero
//    }
// }

// let formularioAlta = document.getElementById('formulario')
// formularioAlta.addEventListener('submit', validarFormulario)

// function validarFormulario(evt) {
//    evt.preventDefault()
//    let inputs = evt.target.children
//    estudiantes.push(new Estudiante(inputs[0].value, inputs[1].value, inputs[2].value))
// }