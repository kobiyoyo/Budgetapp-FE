import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  budget: 2000,
  expenses: [
    { id: 212131, name: 'readingboth', cost: 423 },
    { id: 232131, name: 'golfing', cost: 233 },
    { id: 262131, name: 'soccer', cost: 235 },
    { id: 272131, name: 'shopping', cost: 523 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
