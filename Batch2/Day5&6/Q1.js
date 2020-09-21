let employees = [
  {
    name: "Ajay",
    age: 24,
    city: "Jalgaon",
    salary: 50000,
  },
  {
    name: "Pratik",
    age: 25,
    city: "Mumbai",
    salary: 25000,
  },
  {
    name: "Ankit",
    age: 23,
    city: "Nasik",
    salary: 40000,
  },
  {
    name: "Shubham",
    age: 30,
    city: "Pune",
    salary: 20000,
  },

  {
    name: "Tribhuwan",
    age: 22,
    city: "Pune",
    salary: 35000,
  },
];

display(employees);
function display(superarray) {
  let tableData = "";
  superarray.forEach(function (employee, index) {
    let curruntrow = `<tr>
    <td>${index + 1}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.city}</td>
    <td>${employee.salary}</td>
    <td><button onclick='deletemployee(${index})'>delete</button></td>
    </tr>`;
    tableData += curruntrow;

    let name = (document.getElementById("name").value = "");
    let age = (document.getElementById("age").value = "");
    let city = (document.getElementById("city").value = "");
    let salary = (document.getElementById("salary").value = "");
  });
  document.getElementById("tdata").innerHTML = tableData;
}

function addemployee(event) {
  event.preventDefault();
  let employee = {};
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let salary = document.getElementById("salary").value;

  employee.name = name;
  employee.age = Number(age);
  employee.city = city;
  employee.salary = salary;

  employees.push(employee);
  display(employees);
  console.log("hello");
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
  document.getElementById("salary").value = "";
}

function searchByName() {
  // searchByCity();
  let searchValue = document.getElementById("searchName").value;

  let newData = employees.filter(function (employee) {
    return (
      employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) !=
      employee.city.toUpperCase().indexOf(searchValue.toUpperCase())
    );
  });
  display(newData);
}

function searchByCity() {
  let searchValue = document.getElementById("searchName").value;

  let newData2 = employees.filter(function (employee) {
    return (
      employee.city.toUpperCase().indexOf("searchValue.toUpperCase()") !=
      employee.name.toUpperCase().indexOf("searchValue.toUpperCase()")
    );
  });
  {
  }
  // display(newData2);
}

function deletemployee(index) {
  employees.splice(index, 1);
  display(employees);
}
