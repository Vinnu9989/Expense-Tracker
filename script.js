const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    const incomeTotal = amounts.filter(a => a > 0).reduce((acc, item) => acc + item, 0).toFixed(2);
    const expenseTotal = (amounts.filter(a => a < 0).reduce((acc, item) => acc + item, 0) * -1).toFixed(2);

    balance.innerText = `$${total}`;
    income.innerText = `+$${incomeTotal}`;
    expense.innerText = `-$${expenseTotal}`;
}

function renderList() {
    list.innerHTML = '';
    transactions.forEach((t, i) => {
        const sign = t.amount < 0 ? '-' : '+';
        const li = document.createElement('li');
        li.classList.add(t.amount < 0 ? "expense" : "income");
        li.innerHTML = `
            ${t.text} <span>${sign}$${Math.abs(t.amount)}</span>
            <button class="delete-btn" onclick="deleteTransaction(${i})">x</button>
        `;
        list.appendChild(li);
    });
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    saveAndUpdate();
}

function saveAndUpdate() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    renderList();
    updateValues();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const transaction = {
        text: text.value,
        amount: +amount.value
    };
    transactions.push(transaction);
    saveAndUpdate();
    text.value = '';
    amount.value = '';
});

// Initial render
saveAndUpdate();
