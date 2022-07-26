// Example-2 Object type data type in TypeScript
/*
const student: {
  firstName: string;
  age: number;
  lastName: string;
  courses: string[];
  grades: object[];
  role: [number, string];
} = {
  firstName: "Sanjeet",
  lastName: "Kumar",
  age: 23,
  courses: ["C", "TypeScript", "Java"],
  grades: [
    {
      course: "C",
      grades: 10,
    },
    {
      course: "Java",
      grades: 9,
    },
  ],
  role: [2, "Author"],
};

console.log(student.firstName + student.lastName);

for (const grade of student.grades) {
//  console.log(grade.grades);   // why this is showing type error 
 console.log(grade['grades']); // bot not showing type error for this
}

*/