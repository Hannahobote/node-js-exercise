/**
 * Person.
 */
class Person {
  #name
  constructor(newName, surname, age) {
    this.#name = newName
    this.surname = surname
    this.age = age
    console.log(`hello ${this.#name}`)
  }
  
  getFullName() {
    const name = 'hello world'
    return `${this.#name} ${this.surname}`
  }

  toString() {
    return `my name is ${this.#name} ${this.surname} and I am ${this.age} years old.`
  }
}

const hannah = new Person('hannah', 'obote', 21)
const kalle = new Person('Kalle', 'obote', 18)
console.log(hannah.toString())

class Adress {
  /**
   * @param {string} street
   * @param {string} postNr
   * @param {Person} person type of the person class.
   */
  constructor(street, postNr, person) {
    this.street = street
    this.postNr = postNr
    this.person = person
  }

  /*
  java exempel

  Adress(string street, string postNr, Person person) {

  }*/

  getFullAdress() {
    console.log(`your adress is ${this.street} ${this.postNr}`)
    console.log(`owner of the house ${this.person.getFullName()}`)
  }

  toString() {
    return `your adress is ${this.street} ${this.postNr} and the house owner is: ${this.person.toString()}`
  }
}

const hannahAdress = new Adress('lnugatan 3','12345, Kalmar', new Person('mario', 'luigi', 10) )
console.log(hannahAdress.toString())
console.log(hannahAdress)

class Student extends Person {
  #grade

  constructor(name, surname, age, klass) {
    super(name, surname, age)
    this.klass = klass
    this.#grade = ''
  }

  get StudetInfo() {
    console.log(`${this.name} goes in class nr: ${this.klass}`)
  }
  
  get Grade() {
    return this.grade
  }

  set Grade(newGrade) {
    this.grade = newGrade
  }

  
  
}

const kajsa = new Student('kajsa', 'obote', 15, 'wp22')
kajsa.getFullName()
kajsa.StudetInfo
kajsa.Grade = 'A'
console.log(kajsa.Grade)

