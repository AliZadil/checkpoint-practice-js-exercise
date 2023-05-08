const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    set age(nbr){
        this._age = nbr;
    }
    set name(str){
        this._name = str;
    }
}

function develhoper(){
    return "Develhope";
}

class Student extends Person{
    constructor(name, age, academy){
        super(name, age);
        this._academy = academy;
    }
    signUp(cb){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Congrats, you joined ${cb()}!`)
            }, 2000);
        })
    }
    get academy(){
        return this._academy;
    }
    set academy(str){
        this._academy = str;
    }
}

class DataProcess{
    studentInfo(arr){
        return arr.map(el => {return `${el.name}, aged ${el.age}, is as student of academy ${el.academy}`})
    }
    getAdults(arr){
        return arr.filter(el => el.age > 17);
    }
    getAverage(arr){
        return arr.reduce((total, el) => total + el.age, 0)/arr.length;
    }
}

let ipek = new Person('Ipek', 25);
console.log(ipek);
let ali = new Student('Ali', 28, 'Develhope');
console.log(ali);

// ali.signUp(develhoper)
//     .then((result) => console.log(result))


let students = persons.map(el => new Student(el.name, el.age, develhoper()));
// console.log(students);
let process = new DataProcess();
console.log(process.studentInfo(students));
console.log(process.getAdults(students));
console.log(process.getAverage(students));

let jsonStudent = JSON.stringify(students);
console.log(jsonStudent);
let backToStudent = JSON.parse(jsonStudent);
console.log(backToStudent);