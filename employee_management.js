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
            return total + employee.salary + employee.bonus}
        else {return total += employee.salary}; 
   }, 0);
}}

// Task 3: Create a manager class that inherits from Employee

class Manager extends Employee {
    constructor (name, salary, position, department, bonus) {
        super (name, salary, "Manager", department)
        this.bonus = bonus
    }

getDetails () {
    console.log (`Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}, Bonus" ${this.bonus}`)
}
}

// Task 5: Create and Manage Departments/Employees:

// NOTE: Errors in code were fixed during this step, as I could not check proper functionality
// without data to add. 

// Create departments

const engineering = new Department("Engineering");

const marketing = new Department("Marketing");



// Create employees

const alice = new Employee("Alice", 80000, "Developer", "Engineering");

const bob = new Employee("Bob", 75000, "Designer", "Marketing");

const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);

const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);



// Add employees to departments

engineering.addEmployee(alice);

engineering.addEmployee(charlie);

marketing.addEmployee(bob);

marketing.addEmployee(diana);



// Calculate total salary for each department

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
// $200000
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
// $220000
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
// $205000
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
// $230000

