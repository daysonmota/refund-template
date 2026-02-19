//Seleciona os elementos do formulário
const form = document.querySelector('form');
const expense = document.getElementById('expense');
const category = document.getElementById('category');
const amount = document.getElementById('amount');

//Seleciona os elementos da lista de despesas
const expenseList = document.querySelector('ul');
const expensesTotal = document.querySelector('aside header h2');
const expensesQuantity = document.querySelector('aside header p span');


/* captura o evento de input do campo de valor. */
amount.addEventListener('input', () => { 
  
  //remove tudo o que não for numero.
  let value = amount.value.replace(/\D/g, ''); 

  amount.value = formartCurrencyBRL(value); 

})

/*Formatar valor padrão BRL( Real Brasileiro)*/
function formartCurrencyBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value / 100);
}

/* Captura o evento de submit para obter valores */
form.addEventListener('submit', (event) => { 
  event.preventDefault(); //Impede o envio do formulário
  
    // ✅ Adicione validação
  if (!expense.value.trim() || !category.value || !amount.value) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const newExpense = { 
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    create_at: new Date(),
  }  
  //Chama a função que irá adicionar as despesas na lista.
  addExpenseAdd(newExpense);
})

/* Adiciona um novo item na lista */
function addExpenseAdd(newExpense) {

  try {

    //Cria um elemento para adiconar o item(li) na lista de despesas(ul).
    const expenseItem = document.createElement('li');
    expenseItem.classList.add('expense');

    //Cria ícone da categoria
    const expenseIcon = document.createElement('img');
    expenseIcon.setAttribute('src', `./img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute('alt', newExpense.category_name);
    
    //Cria a info da despesa
    const expenseInfo = document.createElement('div');
    expenseInfo.classList.add('expense-info');

    //Cria o nome da despesa
    const expenseName = document.createElement('strong');
    expenseName.textContent = newExpense.expense;
    
    //Cria a categoria da despesa
    const expenseCategory = document.createElement('span');
    expenseCategory.textContent = newExpense.category_name;

    //Cria o valor da despesa
    const expenseAmount = document.createElement('span');
    expenseAmount.classList.add('expense-amount');
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$', '')}`;

  

    //Cria icone de remover
    const removeIcon = document.createElement('img');
    removeIcon.classList.add('remove-icon');
    removeIcon.setAttribute('src', './img/remove.svg');
    removeIcon.setAttribute('alt', 'Remover despesa');


    //Adiciona o nome e a categoria na div das informações da despesa.
    expenseInfo.append(expenseName,expenseCategory);
  
    //Adiciona a imagem e a div na li
    expenseItem.append(expenseIcon, expenseInfo,expenseAmount,removeIcon);
    
    
    //Adiciona meu li na minha lista de despesas(ul)
    expenseList.append(expenseItem);

    form.reset(); //Limpa o formulário após adicionar a despesa

    updateTotals();
    
  } catch (error) {
    alert("Ocorreu um erro ao adicionar a despesa.");
    console.error(error);
  }             

}

//Atualiza os totais
function updateTotals() {

try {
  
  //recupera todas li da minha ul.
    const items = expenseList.children; 
    
    expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;
    

    //Variável para incrementar o total
    let total = 0;

    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      //remover caracteres não numéricos e substitui a virgula por ponto
      let value = itemAmount.textContent.replace(/[\D,]/g,"").replace(",",".");

      value = parseFloat(value) 

      if(isNaN(value) || value <= 0) {
         console.error(`Valor inválido encontrado: ${itemAmount.textContent}`);
        return;
      }

      total += Number(value)
    }
    expensesTotal.textContent = `Total: ${formartCurrencyBRL(total)}`;


} catch (error) {
  console.error("Ocorreu um erro ao atualizar os totais.", error);
  alert("Ocorreu um erro ao atualizar os totais.");
}
}

expenseList.addEventListener("click", function(event){

  //Verifica se o elemento clicado é o ícone de remover
  if(event.target.classList.contains("remove-icon")){
    const expenseItem = event.target.closest(".expense"); //Encontra o elemento pai mais próximo com a classe "expense"
    
    if(expenseItem){
      expenseItem.remove(); //Remove o item da lista
      updateTotals(); //Atualiza os totais após a remoção
    }
  } else {
    alert("Clique no ícone de remover para excluir a despesa.");
  }                                                    
}
)


