console.log("Hello World!\n==========\n");

// Exercise 1 Section
class Person {
constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
}

addHobby(hobby) {
 this.hobbies.push(hobby);
}

removeHobby(hobby) {
   this.hobbies = this.hobbies.filter((currHobby) => {
      console.log(currHobby);
      if (currHobby == hobby){
        return false;
      }
      return true;
   });
}

greeting() {
console.log("Hello fellow person!");
}

}


let myPerson = new Person("Ben", 0, "Birmingham", ["soccer", "running"]);

myPerson.addHobby("running");

console.log(myPerson);


//exercise 2

class Coder extends Person{
   constructor(name, pets, residence, hobbies){
      super(name, pets, residence, hobbies);
      this.occupation = "Full Stack Web Developer";  
    }

    greeting(){
        console.log("Hello, I'm a coder");
    }

}

//exercise 3

let myCoder = new Coder(
    "Ben", 
    0, 
    "Birmingham", 
    ["soccer", "running"],
    "Full Stack Web Developer"
);

console.log(myCoder);

// exercise 4

class Calculator{
   result = 0;
   
    add(a, b){
        if(b){
        this.result = a + b;
        return this.result;
        }
    }

    subtract(a, b){
        if(b){
        this.result = a - b;
        return this.result;
        }
    }

    multiply(a, b){
        if(b){
        this.result = a * b;
        return this.result;
        }
    }

    divide(a, b){
        if(b){
        this.result = a / b;
        return this.result;
        }
    }
    
    displayResult(){
        console.log(this.result);
    }
}

let calc = new Calculator();

console.log(calc.add(0,1));
console.log(calc.subtract(5,3));
console.log(calc.multiply(1,3));
console.log(calc.divide(6,2));
