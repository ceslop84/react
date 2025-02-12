const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const novosNumeros = [...numeros, 22]

novosNumeros.push(11)

console.log(numeros)
console.log(novosNumeros)

const rex = {
    nome: "Rex"
}

const max = {...rex, idade: 2}

console.log(rex)
console.log(max)

const somar = (...numeros) => {
    return numeros.reduce((a, b) => a+ b, 0)
}

console.log(somar(...numeros))