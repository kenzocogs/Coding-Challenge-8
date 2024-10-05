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
    if (employee instanceof Employee)
    this.employees.push (employee);
    else console.log (`${employee.name} is not a valid employee.`);
}
// this one adds up all salaries
getDepartmentSalary() {
    return this.employees.reduce((total, employee) => total + employee.salary, 0)
}
// Task 4: Handle bonuses for Managers

calculateTotalSalaryWithBonus () {
   return this.employees.reduce ((total, employee) => {
    // checking if employee is a manager, then adding bonus if true
        if (employee instanceof Manager) { 
            return total + employee.salary + employee.bonus
        }
        return total += employee.salary;
   }, 0);
}}

// Task 3: Create a manager class that inherits from Employee

class Manager extends Employee {
    constructor (name, salary, department, bonus) {
        super (name, salary, `${department} Manager`, department)
        this.bonus = bonus
    }

getDetails () {
    console.log (`Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}, Bonus" ${this.bonus}`)
}

}
