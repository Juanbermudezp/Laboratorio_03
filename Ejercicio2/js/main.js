const plus = (numero, numero1) => {
    return numero + numero1;
};
const subtract = (numero, numero1) => {
    return numero - numero1;
};
const multiply = (numero, numero1) => {
    return numero * numero1;
};
const split = (numero, numero1) => {
    return numero / numero1;
};

const requestNumber = () => {
    let numero = parseFloat(prompt("Ingrese el primer número:"));
    let numero1 = parseFloat(prompt("Ingrese otro número:"));
    return { numero, numero1 };
};

const selectOperation = (numero, numero1) => {
    let op = prompt("Elija una opción"
        + "\n1) Suma"
        + "\n2) Resta"
        + "\n3) Multiplicación"
        + "\n4) División"
    );
    switch (op) {
        case "1":
            alert("El resultado es: " + plus(numero, numero1));
            break;
        case "2":
            alert("El resultado es: " + subtract(numero, numero1));
            break;
        case "3":
            alert("El resultado es: " + multiply(numero, numero1));
            break;
        case "4":
            alert("El resultado es: " + split(numero, numero1));
            break;
        default:
            alert("Error");
            break;
    }
};

const main = () => {
    const { numero, numero1 } = requestNumber();
    selectOperation(numero, numero1);
};

main();
