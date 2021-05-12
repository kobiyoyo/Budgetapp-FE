import React,{ useContext } from "react";
import { AppContext } from '../../context/AppContext';


const Balance = () => {
    const { expenses, budget } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total,item) =>{
        return (total = total + item.cost);
    },0)

    const warning =  budget < totalExpenses ? "danger" : "success"
    return(
        <div className={`alert alert-${warning}`}>
            <span>Balance: ${budget - totalExpenses}</span>
        </div>
    )
}

export default Balance;