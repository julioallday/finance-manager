let titleList = document.getElementById('title');
let parcialValues = document.getElementById('parcial-value');
let totalValues = document.getElementById('total-value');

let titleInput_el = document.getElementById('title-input');
let participantsInput_el = document.getElementById('participants-input');
let totalInput_el = document.getElementById('total-input');

class GroupExpenses {
  #numberOfParticipants;
  constructor(title, numberOfParticipants, amount) {
    this.title = title;
    this.parcialValue = Number(amount) / Number(numberOfParticipants);
    this.#numberOfParticipants = numberOfParticipants;
    this.amount = amount;
  }
}

class GroupExpensesManager {
  groupExpensesList;
  constructor(groupExpensesList = []) {
    this.groupExpensesList = groupExpensesList;
    this.createTemplate();
  }
  createTemplate() {
    this.groupExpensesList.forEach((element) => {
      // list items
      let li = document.createElement('li');
      li.setAttribute('class', 'title-item');
      li.innerHTML = `<p>${element.title}</p>`;
      titleList.appendChild(li);

      // parcial items
      let pParcialValue = document.createElement('p');
      pParcialValue.innerText = `R$ ${element.parcialValue}`;
      parcialValues.appendChild(pParcialValue);

      // total items
      let pTotalValue = document.createElement('p');
      pTotalValue.innerText = `R$ ${element.amount}`;
      totalValues.appendChild(pTotalValue);
    });
  }
  addGroupExpense() {
    let newExpense = new GroupExpenses(
      titleInput_el.value,
      participantsInput_el.value,
      totalInput_el.value
    );
    expenses.push(newExpense);

    let li = document.createElement('li');
    li.setAttribute('class', 'title-item');
    li.innerHTML = `<p>${newExpense.title}</p>`;
    titleList.appendChild(li);

    // parcial items
    let pParcialValue = document.createElement('p');
    pParcialValue.innerText = `R$ ${newExpense.parcialValue}`;
    parcialValues.appendChild(pParcialValue);

    // total items
    let pTotalValue = document.createElement('p');
    pTotalValue.innerText = `R$ ${newExpense.amount}`;
    totalValues.appendChild(pTotalValue);

    this.clearInputs();
    this.closeModal();
    window.alert('Nova despesa em grupo adicionada com sucesso!');
  }
  clearInputs() {
    titleInput_el.value = '';
    participantsInput_el.value = '';
    totalInput_el.value = '';
  }
  closeModal() {
    modal_el.style.display = 'none';
  }
}


let expenses = [
  new GroupExpenses('Restaurante', 2, 120),
  new GroupExpenses('Cinema', 2, 160),
  new GroupExpenses('Barzinho', 2, 200),
];

let GroupManager = new GroupExpensesManager(expenses);

let isFull =
  titleInput_el.value && participantsInput_el.value && totalInput_el.value
    ? true
    : false;

function addGroupExpense() {
  
  let isFull =
  titleInput_el.value && participantsInput_el.value && totalInput_el.value
    ? true
      : false;
  
  if (!isFull) {
    alert('Campos obrigatórios');
  } else {
    GroupManager.addGroupExpense();
  }
}
