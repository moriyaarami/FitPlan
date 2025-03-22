import { useAuth } from "../context/auth.context";
import { useState, useEffect } from "react";
import usersService from "../services/userService";

export const useUserInfo = () => {

    const { user } = useAuth();

    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {

            try {
                setLoading(true);
                console.log(user._id)
                const Info = await usersService.getUserById(user._id);
                console.log(Info)
                setUserInfo(Info)
            } catch (err) {
                setError('Failed to load user details');
            } finally {
                setLoading(false)
            }
        }
        fetchUser();
    }, [user._id])

    /*    console.log(userInfo, error, loading) */

    return { userInfo, error, loading }
}

