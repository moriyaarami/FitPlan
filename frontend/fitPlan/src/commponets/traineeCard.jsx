import { NavLink } from "react-router-dom";
import { usePlan } from "../context/plan.context";
import TraineeServices from "../services/traineeServices";
import { useEffect, useState } from "react";

function TraineeCard({ traineeInfo }) {

    const { plan, setPlan } = usePlan();
    const [message, setMessage] = useState("");

    const deleteTrainee = async () => {

        try {
            const response = await TraineeServices.deleteTrainee(traineeInfo._id);
            if (response?.status === 200) {
                setMessage("Trainee successefully deleted ,Refresh the page.")
            }
        } catch (err) {
            console.log(err)
        }
    }


    setPlan(traineeInfo.myPlan)


    return <>

        <div className="card" style={{ width: "18rem" }}>
            {message && <div className="alert alert-secondary">{message}</div>}
            <div className="card-body">
                <img src={traineeInfo.image.url} className="card-img-top" alt={traineeInfo.image.alt} />
                <div className="card-titel">{traineeInfo.name}</div>
                <div className="card-subtitel">
                    {traineeInfo.phone}
                </div>
                <p className="card-text">{traineeInfo.traineeLevel}</p>

            </div>

            <div>
                <button className="btn btn-danger" onClick={deleteTrainee}>delete Trainee</button>
                <NavLink
                    state={{ traineeInfo }}
                    to='/more-info'
                    className="btn btn-dark m-4"
                >More Information</NavLink>
            </div>
        </div>
    </>
}

export default TraineeCard;