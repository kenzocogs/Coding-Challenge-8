// Task 1: Create an employee class

class Employee {
constructor (name, salary, position, department) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
}
// now implementing the method
getDetails() {
console.log (`Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`)
}

}

// Task 2: Create a department class

class Department {
constructor (name) {
    this.name = name;
    this.employees = [];
}
// now implementing both methods: this first one adds the object
addEmployee(employee) {        
    this.employees.push (employee);
}
// this one adds up all salaries
getDepartmentSalary() {
    return this.employees.reduce((total, employee) => total + employee.salary, 0)
}
}
