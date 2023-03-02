const valueInput = document.getElementById('value-input');
const descriptionInput = document.getElementById('description-input');

var mesAtual = 'janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;

class FinancialTransactions {
  constructor(description, value) {
    this.description = description;
    this.value = value;
  }
}
class FinancialTransactionsManager {
 
  constructor(earningsList = [], expensesList = []) {
    this.earningsList = earningsList;
    this.expensesList = expensesList;
    this.createScreen();
    this.createTemplate();
  }
  createScreen() {
    this.createList('earnings-list', this.earningsList);
    this.createList('expenses-list', this.expensesList);
  }
  createList(id, array) {
    for (var i = 0; i < array.length; i++) {
      var li = document.createElement('li');
      li.innerText = `${array[i].description}: R$ ${array[i].value}`;

      document.getElementById(id).appendChild(li);
    }
  }
  addFinancialMovement() {
    const earningRadioValueIsChecked =
      document.getElementById('earning-radio').checked;

    if (earningRadioValueIsChecked) {
      this.addEarning();
    } else {
      this.addExpense();
    }
  }
  addEarning() {
    const newExpense = {
      description: descriptionInput.value,
      value: valueInput.value,
    };
    expensesList.push(newExpense);

    var li = document.createElement('li');
    li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

    document.getElementById('earnings-list').appendChild(li);
  }
  addExpense() {
    const newExpense = {
      description: descriptionInput.value,
      value: valueInput.value,
    };
    expensesList.push(newExpense);

    var li = document.createElement('li');
    li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

    document.getElementById('expenses-list').appendChild(li);
  }
  createTemplate() {
    // Mês
    document.getElementById('month').innerHTML = mesAtual;

    // Entradas
    document.getElementById('total-earnings').innerHTML = entradas;

    // Saídas
    document.getElementById('total-expenses').innerHTML = saidas;

    // Saldo
    document.getElementById('final-balance').innerHTML = saldo;
  }
}

var earningsList = [
  new FinancialTransactions('Salário', 4000),
  new FinancialTransactions('Freela', 400),
  new FinancialTransactions('Youtube', 400),
];

var expensesList = [
  new FinancialTransactions('Alimentação', 650),
  new FinancialTransactions('PSN', 40),
  new FinancialTransactions('Energia', 500),
];

let financialManager = new FinancialTransactionsManager(
  earningsList,
  expensesList
);


function addFinancialMovement() {
  financialManager.addFinancialMovement();
}

function main() {
  financialManager.createTemplate();
}
main();
