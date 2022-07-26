
// enum variable
enum Role {ADMIN, WRITER, CATALOGER} // here Role.ADMIN will be equal to 0 and it will increment to reach at 2 for Cataloger
enum SecondRole {ADMIN='ADMIN',WRITER='WRITER',CATALOGER='CATALOGER'};
enum ThirdRole {ADMIN=99,WRITER="WRITER",CATALOGER=0.5};
const student: {
    firstNmae: string,
    age: Number,
    courses: string[],
    // role
} = {
    firstNmae: "Sanjeet",
    age: 23,
    courses : ["c","TypeScript"],
    // role: Role.ADMIN
}

console.log("sanjeet");

console.log(Role.CATALOGER);
console.log(SecondRole.ADMIN);
console.log(ThirdRole.CATALOGER);