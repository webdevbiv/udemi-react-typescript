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
userName = "Max";
//SECTION - Primitive types
var isProgrammer = true;
// string, number, boolean
//SECTION - Union types
var userID = "123";
userID = 123;
//SECTION - Object types
var user = {
    name: "Igor",
    age: 30,
    isAdmin: true,
    id: "123",
};
//SECTION - Array types
// let hobbies: Array<string>;
var hobbies; // number[] | string[]
// { name: string; age: number }[]
hobbies = ["Sports", "Cooking", "Reading"];
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
function calculate(a, b, calcFun) {
    return calcFun(a, b);
}
calculate(2, 3, add2);
function calculate2(a, b, calcFun) {
    return calcFun(a, b);
}
calculate2(2, 3, add2);
var user2 = {
    name: "Igor",
    age: 30,
    isAdmin: true,
    id: "123",
};
var credentials = {
    email: "IY5vz@example.com",
    password: "123",
};
//SECTION - Interfaces vs Custom Types
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
    console.log(credentials);
}
login(new AuthCredentials());
var admin;
admin = {
    permissions: ["login"],
    userName: "Igor",
};
//SECTION - Literal Types
var role;
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
        console.log("Perform admin action");
    }
}
//SECTION - Generic Types
var roles = ["admin", "super-admin", "user"];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (user) {
        this.storage.push(user);
    },
};
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var newUser = merge({ name: "Igor" }, { age: 30 });
