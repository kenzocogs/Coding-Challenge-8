// Task 1: Create an employee class

class Employee {
constructor (name, salary, position, department) {
    this.name = name
    this.salary = salary
    this.position = position
    this.department = department
}
// now implementing the method
getDetails() {
console.log (`Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`)
}

}
