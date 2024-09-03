const calculateFactorial = (numero) => {
    return (numero != 1) ? numero * calculateFactorial(numero - 1) : 1;
}

const requestNumber = () => {
    let numero = parseFloat(prompt("Ingrese el entero no negativo para calcular su factorial:"));
    return numero; 
}

const main = () => {
    let numero = requestNumber(); 
    alert("El factorial del número es: " + calculateFactorial(numero));
}

main();
