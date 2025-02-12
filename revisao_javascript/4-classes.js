class Animal {
    constructor(f){
        this.familia = f
    }

    andar = () => {    
        return "Andando..."    
    }
}


class Cachorro extends Animal {

    constructor(n, i){
        super("Carnivoros")
        this.nome = n
        this.idade = i
    }

    latir(){
        return `${this.nome}: au au!`
    }

    latir2 = () => {
        return `${this.nome}: au au 2!`
    }
}

let rex = new Cachorro("Rex", 2)

console.log(rex)
console.log(rex.latir())

let max = new Cachorro("Max", 3)

console.log(max)
console.log(max.latir2())
console.log(max.andar())