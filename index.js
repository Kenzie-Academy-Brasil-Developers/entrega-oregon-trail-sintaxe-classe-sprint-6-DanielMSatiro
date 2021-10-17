class Traveler {
    constructor(name){
        this._name = name
        this._food = 1
        this._healthy = true
    }
    //getters
    get name(){
        return this._name
    }
    get food(){
        return this._food
    }
    get healthy(){
        return this.__healthy
    }
    //setters
    set name(traveler){
        return this._name = traveler
    }
    set food(quantity){
        return this._food = quantity
    }
    set healthy(quantity){
        return this.__healthy = quantity
    }
    hunt(){
        this._food+= 2
    }
    eat(){
        if(this._food-1 <= 0){
            this._food = 0
            this._healthy = false
        } else {
            this._food--
        }
    }
}

class Wagon {
    constructor(capacity){
        this._capacity = capacity
        this._passageiros = []
    }
    //getters
    get capacity(){
        return this._capacity
    }
    get passageiros(){
        return this._passageiros
    }
    //setters
    set capacity(quantity){
        return this._capacity = quantity
    }
    getAvailableSeatCount(){
        return this._capacity-this._passageiros.length
    }
    join(traveler){
        if(this.getAvailableSeatCount()>0){
            this._passageiros.push(traveler)
        }
    }
    shouldQuarantine(){
        return this._passageiros.some(({_healthy})=>!_healthy)
    }
    totalFood(){
        return this._passageiros.reduce((acc,{_food})=>acc+_food,0)
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);