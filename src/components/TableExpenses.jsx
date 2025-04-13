import React from 'react'

const TableExpenses = ({ expenses = [] }) => {
  return (
    <table className="table-expense">
      <thead>
        <tr>
          <th>Expense</th><th>Description</th><th>Category</th><th>Amount</th><th>Date</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableExpenses