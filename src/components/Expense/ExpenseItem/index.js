import React,{useContext} from "react";
import {TiDelete} from "react-icons/ti";
import {AppContext} from "../../../context/AppContext";


const ExpenseItem = ({expense}) => {
    const {name,cost,id} = expense
    const { dispatch } = useContext(AppContext)
    const handleDelete = (id)=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload: id
        })
    }

    return(
        <li  className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
                <span className="mr-3">
                    ${cost}
                </span>
                <TiDelete onClick={() => handleDelete(id)} size='1.5em'></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;