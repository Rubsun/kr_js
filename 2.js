class Person {
    constructor(name, age, address) {
      this.name = name
      this.age = age
      this.address = address
    }
  
    clone() {
      return structuredClone(this)
    }
  }
  
  const person1 = new Person("Максим", 30, 'Воскресенская 12')
  const person2 = person1.clone()
  
  console.log(person1)
  console.log(person2)
  