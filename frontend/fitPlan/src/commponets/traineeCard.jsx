import { NavLink } from "react-router-dom";
import TraineeServices from "../services/traineeServices";
import { useEffect, useState } from "react";
import { usePlan } from "../context/plan.context";

function TraineeCard({ traineeInfo, deleteTrainee }) {

    const { setPlan } = usePlan();

    useEffect(() => { setPlan(traineeInfo.myPlan) }, [])


    return <>
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <img src={traineeInfo.image.url} className="card-img-top" alt={traineeInfo.image.alt} />
                <div className="card-titel">{traineeInfo.name}</div>
                <div className="card-subtitel">
                    {traineeInfo.phone}
                </div>
                <p className="card-text">{traineeInfo.traineeLevel}</p>

            </div>

            <div>
                <button className="btn btn-danger" onClick={() => deleteTrainee(traineeInfo._id)}>delete Trainee</button>
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