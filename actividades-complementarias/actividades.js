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

function quoteDollar(pesos) {
   return pesos / 350
}

function quotePeso(dollar) {
   return dollar * 350
}

alert(quoteDollar(parseFloat(prompt('Ingrese el monto de pesos que quiere cambiar a dolar:'))))
alert(quotePeso(parseFloat(prompt('Ingrese el monto de dolares que quiere cambiar a pesos:'))))