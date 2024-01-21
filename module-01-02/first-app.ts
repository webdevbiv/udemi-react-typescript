let userName: string = "Igor";

userName = "Max";

//SECTION - Primitive types

let isProgrammer: boolean = true;

// string, number, boolean

//SECTION - Union types

let userID: string | number | boolean = "123";

userID = 123;

//SECTION - Object types

let user: {name: string; age: number; isAdmin: boolean; id: string | number} = {
  name: "Igor",
  age: 30,
  isAdmin: true,
  id: "123",
};

//SECTION - Array types

// let hobbies: Array<string>;
let hobbies: string[]; // number[] | string[]

// { name: string; age: number }[]

hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3, 4];

//SECTION - Adding Types to functions

function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

function add2(a: number, b: number) {
  const result = a + b;
  return result;
}

function calculate(
  a: number,
  b: number,
  calcFun: (a: number, b: number) => number
): number {
  return calcFun(a, b);
}

calculate(2, 3, add2);

//SECTION - Type Aliases

type AddFn = (a: number, b: number) => number;

function calculate2(a: number, b: number, calcFun: AddFn): number {
  return calcFun(a, b);
}

calculate2(2, 3, add2);

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user2: User = {
  name: "Igor",
  age: 30,
  isAdmin: true,
  id: "123",
};

//SECTION - Interfaces

interface Credentials {
  email: string;
  password: string;
}

let credentials: Credentials = {
  email: "IY5vz@example.com",
  password: "123",
};

//SECTION - Interfaces vs Custom Types

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {
  console.log(credentials);
}

login(new AuthCredentials());

//SECTION - Types Merging

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Igor",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Igor",
};

//SECTION - Literal Types

let role: "admin" | "user" | "super-admin" | "guest";

//SECTION - Adding Type Guards

type Role = "admin" | "user" | "super-admin" | "guest";
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    console.log("Perform admin action");
  }
}

//SECTION - Generic Types

let roles: Role[] = ["admin", "super-admin", "user"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    this.storage.push(user);
  },
};

function merge<T, U>(objA: T, objB: U) {
  return {...objA, ...objB};
}

const newUser = merge<{name: string}, {age: number}>({name: "Igor"}, {age: 30});
