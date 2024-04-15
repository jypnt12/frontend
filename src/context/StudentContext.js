import { createContext, useReducer } from "react";

export const StudentsContext = createContext();

export const studentReducer = (state, action)=>{
    switch(action.type){
        case 'SET_STUDENTS':
            return {
                students: action.payload
            }
        case 'CREATE_STUDENT':
            return {
                students: [action.payload, ...state.students]
            }
        case 'DELETE_STUDENT':
            return {
                students: state.students.filter((s)=>s.id!==action.payload.id)
            }
        default:
            return state
        
    }
}

export const StudentsContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(studentReducer, {
        students: null
    })

    return (
        <StudentsContext.Provider value={{...state, dispatch}}>
            {children}
        </StudentsContext.Provider>
       
    )
}