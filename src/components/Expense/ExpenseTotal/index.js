import React,{ useContext } from "react";
import { AppContext } from '../../../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, budget } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total,item) =>{
        return (total = total + item.cost);
    },0)
    return(
        <div className="alert alert-primary">
            <span>Expense: ${totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal;