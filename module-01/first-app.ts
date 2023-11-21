let userName: string = "Igor";

// userName = 34;
userName = "Igor";

//SECTION - Primitive types

let isProgrammer: boolean = true;
let userAge: number = 30;
let userName2: string = "Igor";

//NOTE - string, number, boolean

//SECTION - Union types

let userID: string | number | boolean = "123";
userID = 123;
userID = true;

//SECTION - Object types

let user: { name: string; age: number; isAdmin: boolean; id: string } = {
  name: "Igor",
  age: 30,
  isAdmin: true,
  id: "123",
};

//SECTION - Array types

let hobbies: Array<string>;
let hobbies2: string[]; // number[] | string[] | boolean[]

hobbies = ["Sports", "Cooking", "Programming", "Gaming"];
// hobbies = [1, 2, 3, 4];

//SECTION - Adding Types to functions
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

function add2(a: number, b: number): number {
  const result = a + b;
  return result;
}

add(1, 2);

//SECTION - Defining function types

function calculate(
  a: number,
  b: number,
  calcFun: (a: number, b: number) => number
): number {
  return calcFun(a, b);
}

calculate(1, 2, add2);

//SECTION - Type Aliases

type AddFn = (a: number, b: number) => number;

function calculate2(a: number, b: number, calcFun: AddFn): number {
  return calcFun(a, b);
}

type StringOrNumber = string | number;

let id: StringOrNumber = "123";
id = 123;
id = "123";

type Person = {
  name: string;
  age: number;
};

let person: Person;

//SECTION - Interfaces

interface userData {
  id: string;
  email: string;
  password: string;
  name: string;
  age: number;
}

let user1: userData;

user1 = {
  id: "123",
  email: "IY5vz@example.com",
  password: "123",
  name: "Igor",
  age: 30,
};

//SECTION - Interfaces vs Types

class AuthCredentials implements userData {
  id: string;
  email: string;
  password: string;
  name: string;
  age: number;
  socialMedia?: string[];
}

let user2: AuthCredentials;

user2 = {
  id: "123",
  email: "IY5vz@example.com",
  password: "123",
  name: "Igor",
  age: 30,
  socialMedia: ["instagram", "facebook"],
};

function login(credentials: userData) {
  console.log(credentials);
}

login(new AuthCredentials());

//SECTION - Merging Types

type AdminLogin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = AdminLogin & AppUser;

let admin: AppAdmin;

admin = { userName: "Igor", permissions: ["Sports"] };

interface AdminLogin2 {
  permissions: string[];
}

interface AppUser2 {
  userName: string;
}

interface AppAdmin2 extends AdminLogin2, AppUser2 {}

let admin2: AppAdmin2;

admin2 = { userName: "Igor", permissions: ["Sports"] };

//SECTION - Literal Types

let role: "admin" | "user" | "super-admin" | "guest"; // 'user' | 'admin' | 'super-admin' | 'guest'

//SECTION - Type Guards

type Role = "admin" | "user" | "super-admin" | "guest";

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    console.log("Perform admin action");
  }
}

//SECTION - Generic Types

let roles: Array<Role>;

roles = ["admin", "super-admin", "user"];

type DataStorage<T> = {
  storage: T[];
  add: (item: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],

  add(item: string) {
    this.storage.push(item);
  },
};

const userStorage: DataStorage<AuthCredentials> = {
  storage: [],

  add(item: AuthCredentials) {
    this.storage.push(item);
  },
};

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const user3 = merge<{ name: string }, { age: number }>(
  { name: "Igor" },
  { age: 30 }
);
