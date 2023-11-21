var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = "Igor";
// userName = 34;
userName = "Igor";
//SECTION - Primitive types
var isProgrammer = true;
var userAge = 30;
var userName2 = "Igor";
//NOTE - string, number, boolean
//SECTION - Union types
var userID = "123";
userID = 123;
userID = true;
//SECTION - Object types
var user = {
    name: "Igor",
    age: 30,
    isAdmin: true,
    id: "123",
};
//SECTION - Array types
var hobbies;
var hobbies2; // number[] | string[] | boolean[]
hobbies = ["Sports", "Cooking", "Programming", "Gaming"];
// hobbies = [1, 2, 3, 4];
//SECTION - Adding Types to functions
function add(a, b) {
    var result = a + b;
    console.log(result);
}
function add2(a, b) {
    var result = a + b;
    return result;
}
add(1, 2);
//SECTION - Defining function types
function calculate(a, b, calcFun) {
    return calcFun(a, b);
}
calculate(1, 2, add2);
function calculate2(a, b, calcFun) {
    return calcFun(a, b);
}
var id = "123";
id = 123;
id = "123";
var person;
var user1;
user1 = {
    id: "123",
    email: "IY5vz@example.com",
    password: "123",
    name: "Igor",
    age: 30,
};
//SECTION - Interfaces vs Types
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
var user2;
user2 = {
    id: "123",
    email: "IY5vz@example.com",
    password: "123",
    name: "Igor",
    age: 30,
    socialMedia: ["instagram", "facebook"],
};
function login(credentials) {
    console.log(credentials);
}
login(new AuthCredentials());
var admin;
admin = { userName: "Igor", permissions: ["Sports"] };
var admin2;
admin2 = { userName: "Igor", permissions: ["Sports"] };
//SECTION - Literal Types
var role; // 'user' | 'admin' | 'super-admin' | 'guest'
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
        console.log("Perform admin action");
    }
}
//SECTION - Generic Types
var roles;
roles = ["admin", "super-admin", "user"];
var textStorage = {
    storage: [],
    add: function (item) {
        this.storage.push(item);
    },
};
var userStorage = {
    storage: [],
    add: function (item) {
        this.storage.push(item);
    },
};
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var user3 = merge({ name: "Igor" }, { age: 30 });
