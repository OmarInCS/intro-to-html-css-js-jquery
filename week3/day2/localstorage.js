JSON.stringify(e1));
undefined
localStorage.getItem("emp1");
"{"name":"Omar","job":"Trainer","company":"Abadnet"}"
e1.company
"Abadnet"
e1.name
"Omar"
let x = localStorage.getItem("emp1");
VM488:1 Uncaught SyntaxError: Identifier 'x' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM488:1
let e2 = localStorage.getItem("emp1");
undefined
e2
"{"name":"Omar","job":"Trainer","company":"Abadnet"}"
e1
{name: "Omar", job: "Trainer", company: "Abadnet"}name: "Omar"job: "Trainer"company: "Abadnet"__proto__: Object
let e2 = JSON.parse(localStorage.getItem("emp1"));
undefined
e2
{name: "Omar", job: "Trainer", company: "Abadnet"}
e2.job
"Trainer"
e2.name
"Omar"