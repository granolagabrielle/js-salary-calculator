// on ready function

onReady();

function onReady() {
  console.log('Javascript is working');
}

// array to store employees

const employeeList = [];

// function to add new employee to table

function addEmployee(event) {
  // prevent default behavior
  event.preventDefault();
  // test
  console.log('add employee button was clicked');
  // reference inputs on DOM
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const employeeId = document.getElementById('employee-id');
  const jobTitle = document.getElementById('job-title');
  const annualSalary = document.getElementById('annual-salary');
  // create new object with values from form
  const employee = {
    first: firstName.value,
    last: lastName.value,
    id: employeeId.value,
    title: jobTitle.value,
    salary: annualSalary.value,
  };
  // test new employee
  console.log(employee);
  // push into array
  employeeList.push(employee);
  // reset form
  document.getElementById('form').reset();
  renderEmployees();
  calculateCost();
}

// function to render employee list
function renderEmployees() {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';
  for (let i = 0; i < employeeList.length; i++) {
    tableBody.innerHTML += `
        <tr>
            <td>${employeeList[i].first}</td>
            <td>${employeeList[i].last}</td>
            <td>${employeeList[i].id}</td>
            <td>${employeeList[i].title}</td>
            <td>$${employeeList[i].salary}</td>
            <td><button id="delete-button" onclick="removeEmployee(event)">Delete</button></td>
        </tr>    
        `;
  }
}

// function to delete employee from table
function removeEmployee(event) {
  console.log('delete employee button was clicked');
  const deleteButton = event.target;
  const deletedEmployee = deleteButton.closest('tr').remove();
  employeeList.splice(employeeList.indexOf(deletedEmployee), 1);
  renderEmployees();
}

// calculate monthly salary costs
function calculateCost() {
  let total = 0;
  for (const person of employeeList) {
    total += Math.ceil(person.salary / 12);
  }
  const salaryTotal = document.getElementById('cost');
  console.log(total);
  if (total > 20000) {
    salaryTotal.style.backgroundColor = '#FF0000';
    salaryTotal.innerHTML = `$${total}`;
  } else {
    // salaryTotal.style.backgroundColor = '#FFFFFF';
    salaryTotal.innerHTML = `$${total}`;
  }
}

// function removeAndCalculate(event) {
//   console.log('delete employee button was clicked');
//   const deleteButton = event.target;
//   const deletedEmployee = deleteButton.closest('tr').remove();
//   employeeList.splice(employeeList.indexOf(deletedEmployee), 1);
// }
