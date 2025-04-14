import React, { useState } from 'react'
import Mainbar from './components/Mainbar';
import FormExpenses from './components/FormExpenses';
import TableExpenses from './components/TableExpenses';

const App = () => {
  const [expenses, setExpenses] = useState([])
  const [search, setSearch] = useState('')

  const addExpense= (expense) => {
    setExpenses([expense, ...expenses])
  }
  const filteredExpenses = expenses.filter(e =>
    e.expense.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
    <h1>Expanse Tracker</h1>
    <p>Start taking control of your finances and life.Record,categorize and analyze your spending</p>
    <Mainbar search={search} setSearch={setSearch}/>
    <div className='main-grid'>
      <FormExpenses onAddExpense={addExpense} />
      <TableExpenses expenses={filteredExpenses} />
    </div>
   </div>
  )
}

export default App
