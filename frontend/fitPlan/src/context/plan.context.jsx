import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth.context";
import usersService from "../services/userService";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {

    const [plan, setPlan] = useState([]);


    return (
        <PlanContext.Provider value={{ plan, setPlan }}>
            {children}
        </PlanContext.Provider>
    )
}

export const usePlan = () => { return useContext(PlanContext) } 