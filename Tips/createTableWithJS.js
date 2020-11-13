const table = document.querySelector('table');


const headerRow = table.createTHead().insertRow();
headerRow.insertCell().textContent = 'ФИО';
headerRow.insertCell().textContent = 'Должность';
headerRow.insertCell().textContent = 'Зарплата';


const newRow = table.insertRow();
newRow.insertCell().textContent = '+';
newRow.insertCell().textContent = '+';
newRow.insertCell().textContent = '+';