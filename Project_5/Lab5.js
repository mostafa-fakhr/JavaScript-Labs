class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.healthRate = validateHealth(healthRate);
    this.money = money;
    this.sleepMood = sleepMood;
  }
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }
  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}
class Employee extends Person {
  // static lastId = 0;
  constructor(
    fullName,
    money,
    sleepMood,
    healthRate,
    id,
    email,
    workMood,
    salary,
    isManager
  ) {
    //var id = ++Employee.lastId;
    super(fullName, money, sleepMood, healthRate);
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.salary = validateSalary(salary);
    this.isManager = isManager;
  }
  work(hours) {
    if (hours == 8) {
      this.workMood = "Happy";
    } else if (hours > 8) {
      this.workMood = "tired";
    } else if (hours < 8) {
      this.workMood = "lazy";
    }
  }
  cloneWithoutSalary() {
    var emp = new Employee(
      this.fullName,
      this.money,
      this.sleepMood,
      this.healthRate,
      this.id,
      this.email,
      this.workMood,
      "",
      this.isManager
    );
    return emp;
  }
}

class Office {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  getAllEmployees() {
    return this.employees;
  }
  getEmployee(empId) {
    for (let employee of this.employees) {
      //hatlef 3la kol el employees le7ad a5er el array
      if (employee.id === empId) {
        alert("employee found");

        if (employee.isManager) {
          console.log(
            `Full Name: ${employee.fullName}\nMoney: ${employee.money}\nSleep Mood: ${employee.sleepMood}\nHealth Rate: ${employee.healthRate}\nAge: ${employee.age}\nID: ${employee.id}\nEmail: ${employee.email}\nWork Mood: ${employee.workMood}\nisManager: ${employee.isManager}`
          );
          return employee.cloneWithoutSalary();
        } else {
          console.log(
            `Full Name: ${employee.fullName}\nMoney: ${employee.money}\nSleep Mood: ${employee.sleepMood}\nHealth Rate: ${employee.healthRate}\nAge: ${employee.age}\nID: ${employee.id}\nEmail: ${employee.email}\nWork Mood: ${employee.workMood}\nSalary: ${employee.salary}\nisManager: ${employee.isManager}`
          );
          return employee;
        }
      }
    }
  }
  hire(employee) {
    this.employees.push(employee);
  }

  fire(empId) {
    let firstId = this.employees.findIndex(findId);
    function findId(value) {
      return empId == value.id;
    }
    if (firstId == -1) {
      alert("no Id found");
    } else {
      this.employees.splice(firstId, 1);
    }
  }
}
let myOffice = new Office("My Office");
let submit;

do {
  //Menu to see what user wants
  var operation = Number(
    prompt(
      "Welcome to Employees App\nEnter Operation:\n1- Hire Employee\n2- Fire Employee\n3- Display All Employees\n4- Exit"
    )
  );

  switch (operation) {
    case 1:
      let employee = new Employee();
      employee.isManager =
        prompt(
          'If you want to add a manager enter "mngr" if you want to add a normal employee enter "nrml" '
        ) == "mngr";

      employee.fullName = prompt("Enter employee's full name");
      employee.id = prompt("enter employees id");
      employee.email = prompt("enter employee email");
      var workHours = parseInt(prompt("enter employees working hours"));
      // Call the work method to set the workMood property
      employee.work(workHours);
      employee.salary = prompt("enter employees salary");
      var items = parseInt(prompt("enter the number of items bought"));
      employee.buy(items);

      myOffice.hire(employee);
      console.log("all employees are 22");
      console.log(myOffice.getAllEmployees());
      submit = confirm(
        'If You Want To do any operation press "Yes", if No press "No"'
      );
      break;
    case 2:
      var empId = parseInt(prompt("Enter employee id to be fired"));
      myOffice.fire(empId);
      submit = confirm(
        'If You Want To do any operation press "Yes", if No press "No"'
      );
      console.log(myOffice.getAllEmployees());
      break;
    case 3:
      alert(JSON.stringify(myOffice.getAllEmployees()));
      break;
    case 4:
      alert("goodbye you're leaving the program");
      break;
  }
} while (submit);

//Non member functions
function validateSalary(salary) {
  if (salary >= 1000) {
    return salary;
  } else {
    return "invalid operation";
  }
}
function validateHealth(healthRate) {
  if (healthRate >= 0 && healthRate <= 100) {
    return healthRate;
  } else {
    return "invalid healthrate";
  }
}
