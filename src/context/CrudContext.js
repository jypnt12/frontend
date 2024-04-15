import React, { createContext, useReducer } from "react";

export const StudentsContext = createContext();
export const SubjectsContext = createContext();

// Reducer for managing students and subjects
export const crudReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        data: action.payload
      };
    case "CREATE_DATA":
      return {
        data: [action.payload, ...state.data]
      };
    case "DELETE_DATA":
      return {
        data: state.data.filter((item) => item.id !== action.payload.id)
      };
    case "UPDATE_DATA":
    return {
        data: state.data.map((item) =>
        item.id === action.payload.id ? action.payload.updatedItem : item
        )
    };
    default:
      return state;
  }
};

export const StudentsContextProvider = ({ children }) => {
  const [studentState, studentDispatch] = useReducer(crudReducer, {
    data: null
  });

  const [subjectState, subjectDispatch] = useReducer(crudReducer, {
    data: null
  });

  return (
    <StudentsContext.Provider value={{ ...studentState, studentDispatch }}>
      <SubjectsContext.Provider value={{ ...subjectState, subjectDispatch }}>
        {children}
      </SubjectsContext.Provider>
    </StudentsContext.Provider>
  );
};
