import React,{useContext,useState} from "react";
import ExpenseItem from "../ExpenseItem";
import { AppContext } from '../../../context/AppContext';


const ExpenseList = () => {

    const { expenses } = useContext(AppContext)
    const [search,setSearch] = useState('')
    const  filteredExpense = (expenses) => {
        return expenses.filter((expense) => search === "" || expense.name.toLowerCase().includes(search.toLowerCase()))
    }
    
    return(
        <>
        <div className="row mt-3 mb-3">
          <div className="col-sm">
        <input onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>
        </div>
        <ul className="list-group">
            {filteredExpense(expenses).map((expense)=> <ExpenseItem key={expense.id}  expense={expense}/> )}
        </ul>
        </>
    )
}

export default ExpenseList;