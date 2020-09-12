let marks = [22, 19, 13, 25];
undefined
typeof marks
"object"
marks[0]
22
marks.length
4
marks[3]
25
marks[3] = 15
15
marks
(4) [22, 19, 13, 15]
marks.push(17, 23, 12)
7
marks
(7) [22, 19, 13, 15, 17, 23, 12]0: 221: 192: 133: 154: 175: 236: 12length: 7__proto__: Array(0)
marks.slice(0, 3)
(3) [22, 19, 13]
marks.splice(2, 1)
[13]
marks
(6) [22, 19, 15, 17, 23, 12]
for (let i = 0; i < marks.length; i++) {
    marks[i] += 2;
}
14
marks
(6) [24, 21, 17, 19, 25, 14]
for (let i in marks) {
    marks[i] -= 2;
}
12
marks
(6) [22, 19, 15, 17, 23, 12]0: 221: 192: 153: 174: 235: 12length: 6__proto__: Array(0)
for (let m of marks) {
    console.log(m);
}
VM3759:2 22
VM3759:2 19
VM3759:2 15
VM3759:2 17
VM3759:2 23
VM3759:2 12
undefined
let e1 = {name: "Ahmed", salary: 5000, job: "Sales", deptId: 90};
undefined
e1
{name: "Ahmed", salary: 5000, job: "Sales", deptId: 90}name: "Ahmed"salary: 5000job: "Sales"deptId: 90__proto__: Object
e1.name
"Ahmed"
e1.job
"Sales"
e1["deptId"]
90
e1.salary = 6000
6000
e1
{name: "Ahmed", salary: 6000, job: "Sales", deptId: 90}
e1["salary"] = 7000
7000
e1
{name: "Ahmed", salary: 7000, job: "Sales", deptId: 90}