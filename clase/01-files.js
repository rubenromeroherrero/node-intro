const chalk = require("chalk");
const add = require("./utils/add");
const stringUtils = require("./utils/string");

const redCodeHouse = chalk.red("Hello CodeHouse");
console.log(redCodeHouse);

const sum = add(15, 5);
console.log(sum);

const name = stringUtils.capitalize("javier");
console.log(name);

const helloWorld = stringUtils.concatenate("Buenos", "días");
console.log(helloWorld);

const employee = {
  fullname: "Javier",
  age: 28,
  active: false,
  salary: 50000,
};

const { fullname, age, active } = employee;

const employeeInfo = {
  fullname: fullname,
  age,
  active,
};
console.log(employeeInfo);
