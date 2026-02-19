# Refund Template 💰

Um aplicativo web interativo para gerenciamento e controle de despesas pessoais com interface intuitiva e cálculos automáticos.

## 🎯 Funcionalidades

- ✅ Adicionar despesas com nome, categoria e valor
- ✅ Formatação automática de valores em Real Brasileiro (BRL)
- ✅ Validação de campos obrigatórios
- ✅ Listagem dinâmica de despesas com ícones de categoria
- ✅ Cálculo automático de total e quantidade de despesas
- ✅ Remover despesas individuais
- ✅ Atualização em tempo real dos totais

## 📋 Como Funciona

### Fluxo Principal
1. Preencha o formulário com **despesa**, **categoria** e **valor**
2. O valor é formatado automaticamente para BRL
3. Clique em enviar para adicionar à lista
4. O total e a quantidade são atualizados automaticamente
5. Clique no ícone de remover para deletar uma despesa

### Validações
- Todos os campos são obrigatórios
- Apenas números são aceitos no campo de valor
- Valores inválidos são tratados com mensagens de erro

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilos
- **JavaScript (Vanilla)** - Funcionalidades e lógica

## 📂 Estrutura de Arquivos

```
refund-template/
├── index.html
├── style.css
├── script.js
└── img/
    └── [ícones das categorias]
```

## 🔧 Funções Principais

### `formartCurrencyBRL(value)`
Formata um valor numérico para o padrão de moeda BRL.

### `addExpenseAdd(newExpense)`
Cria e adiciona um novo item de despesa à lista com tratamento de erros.

### `updateTotals()`
Recalcula automaticamente o total e a quantidade de despesas.

## 💻 Exemplo de Uso

1. Insira "Almoço" como despesa
2. Selecione "Alimentação" como categoria
3. Digite "3500" (que será formatado para R$ 35,00)
4. Clique em enviar
5. A despesa aparecerá na lista com o total atualizado

## 🐛 Tratamento de Erros

- Validação de campos vazios
- Verificação de valores numéricos válidos
- Try/catch em funções críticas
- Mensagens de erro em console e alerts

## 📝 Notas

- Datas de criação são automaticamente registradas
- IDs únicos são gerados usando timestamp
- Suporta múltiplas categorias com ícones personalizados