import { useState, useEffect } from "react";
import { useAuth } from "../context/auth.context";
import BizUsersService from "../services/bizUserService";
import AddTrainee from "./addTrainee";
import { NavLink } from "react-router-dom";
import TraineeCard from "../commponets/traineeCard";
import TraineeServices from "../services/traineeServices";

function MyTrainess({ openModal }) {

    const [trainees, setTrainees] = useState([]);

    const { user } = useAuth()

    useEffect(() => {
        const fetchUser = async () => {
            const response = await TraineeServices.getAllTrainees();
            setTrainees(response.data)
        }

        fetchUser()
    }, [user]);

    return <div className="conrtainer text-center m-4">
        <h3>My Trainees</h3>
        <div>
            {trainees.length == 0 ? (<h6>You have not trainees yet.</h6>) : (
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {trainees.map((trainee, index) => {

                        return <TraineeCard traineeInfo={trainee.traineeId} key={index} />
                    })}
                </div>
            )}
        </div>

        {/*  <NavLink to='/add-trainee' className="btn btn-dark m-5" >Add Trainee</NavLink> */}
        <button onClick={() => openModal('addTrainee')} className="btn btn-dark m-5" >Add Trainee</button>
    </div>


}

export default MyTrainess;