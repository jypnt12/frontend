import { StudentsContext } from "../context/UserContext";

import { useContext } from "react";

export const useStudentsContext = () => {
    const context = useContext(StudentsContext)

    if(!context){
        throw Error(' useStudentsContext must be used inside an WorkoutsContextProvider')

    }

    return context
}