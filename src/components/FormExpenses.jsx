import React, { useState } from 'react';

const FormExpenses = ({onAddExpense}) => {
    const [form, setForm] = useState({
        expense: '', description:'', category: '', amount: '', date: ''
    })

    const handleChange = e => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        onAddExpense(form);
        setForm({expense: '', description: '', category: '', amount: '', date: ''})
    }
  return (
    <form className="form-expense" onSubmit={handleSubmit}>
    <input name="expense" placeholder="Expense name" value={form.expense} onChange={handleChange} required />
    <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
    <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
    <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
    <input type="date" name="date" value={form.date} onChange={handleChange} required />
    <button type="submit">Submit</button>
  </form>
  )
}

export default FormExpenses