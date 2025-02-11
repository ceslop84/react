const frutas = ['banana', 'maçã', 'laranja'];

let [fruta1, fruta2] = frutas

console.log(fruta1)
console.log(fruta2)

let [fruta11, ,fruta31] = frutas

console.log(fruta11)
console.log(fruta31)

const pessoa = {
    nome: "Joao",
    idade: 20,
    pais: "Brasil",
}

const {nome, idade} = pessoa

const localidade = ({pais, nome}) => `Você mora no ${pais} e seu nome é ${nome}`

console.log(localidade(pessoa))