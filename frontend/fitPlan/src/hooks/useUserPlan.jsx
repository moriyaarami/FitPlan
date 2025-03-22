import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context"
import usersService from "../services/userService";
import { usePlan } from "../context/plan.context";

export const useUserPlan = () => {

    const { user } = useAuth();
    const { plan, setPlan } = usePlan()

    useEffect(() => {
        const fetchUser = async () => {
            const response = await usersService.getUserById(user._id);
            const userPlan = response.myPlan;
            setPlan(userPlan)
        }

        fetchUser()

    }, [user])

    return { plan }

}