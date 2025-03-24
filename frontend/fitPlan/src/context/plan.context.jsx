import { createContext, useContext, useState } from "react";
import TraineeServices from "../services/traineeServices";


const PlanContext = createContext();

export const PlanProvider = ({ children }) => {

    const [plan, setPlan] = useState([]);


    return (
        <PlanContext.Provider value={{
            plan,
            setPlan,
        }}>
            {children}
        </PlanContext.Provider>
    )
}

export const usePlan = () => { return useContext(PlanContext) };

