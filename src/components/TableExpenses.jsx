import React from 'react'

const TableExpenses = ({ expenses, setExpenses = [] }) => {

  
    const handleDelete = (indexToDelete) => {
      const newExpenses = expenses.filter((_, index) => index !== indexToDelete)
      setExpenses(newExpenses)
    }
  
    return <TableExpenses expenses={expenses} handleDelete={handleDelete} />
  
  return (
    <table className="table-expense">
      <thead>
        <tr>
          <th>Expense</th><th>Description</th><th>Category</th><th>Amount</th><th>Date</th><th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e, index) => (
          <tr key={index}>
            <td>{e.expense}</td>
            <td>{e.description}</td>
            <td>{e.category}</td>
            <td>{e.amount}</td>
            <td>{e.date}</td>
            <td>
              <button className='delete-btn' onClick={(e) => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableExpenses
