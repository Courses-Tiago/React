//Union, alternative types
let userId: string | number = 'abcs23';
userId = 123;

type StringOrNumber = string | number;

let anotherUserId: StringOrNumber;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: StringOrNumber;
};

let user: User;

let hobbies: Array<string>;
hobbies = ['Running', 'Playing'];
let hobbies_by: string[];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

function calculate(
  a: number, 
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

calculate(3, 5, add);

type AddFn = (a: number, b: number) => number;

function calc(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calc(8, 5, add);

// to create objects
interface Credentials {
  password: string;
  email: string;
}

//When implements Credentials you must add the same fields on class
class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;

  constructor(pass: string, email: string, name: string) {
    this.password = pass;
    this.email = email;
    this.userName = name;
  }
}

function login(cred: Credentials) {

}

login(new AuthCredentials('abc', 'me@ex.com', 'tiago'));