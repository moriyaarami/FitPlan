import { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useEx } from "../hooks/useEx";

function PlanCard({ dayPlan, trainee, traineeId }) {

    const { day, exercises } = dayPlan;

    const Exercises = useEx();

    const Plan = Exercises.filter((exercise) => exercises.some((ex) => ex.exerciseId === exercise._id))

    return <>
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-titel">{day}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Your workout for this day</h6>
                <div className="card-text">
                    {exercises.length === 0 ? (
                        <p>No exercises added yet.</p>
                    ) : (
                        <ul>
                            {Plan.map((ex, index) => {
                                return <li key={index} > {ex.name}</li>
                            })}
                        </ul>
                    )}
                </div>

            </div>

            <NavLink
                to="/more-actions"
                state={{ dayPlan, Plan, trainee, traineeId }}
                className="btn btn-dark mt-3"
            >
                Manage Exercises
            </NavLink>
        </div >
    </>

}

export default PlanCard;