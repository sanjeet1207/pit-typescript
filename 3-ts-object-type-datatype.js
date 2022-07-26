// Example-2 Object type data type in TypeScript
/*
var student = {
    firstName: "Sanjeet",
    lastName: "Kumar",
    age: 23,
    courses: ["C", "TypeScript", "Java"],
    grades: [
        {
            course: "C",
            grades: 10
        },
        {
            course: "Java",
            grades: 9
        },
    ],
    role: [2, "Author"]
};
console.log(student.firstName + student.lastName);
for (var _i = 0, _a = student.grades; _i < _a.length; _i++) {
    var grade = _a[_i];
    //  console.log(grade.grades);   // why this is showing type error 
    console.log(grade['grades']); // bot not showing type error for this
}

*/