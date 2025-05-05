import { useLocation } from "react-router-dom";
import ExerciseCard from "../commponets/exerciseCard";
import { useEx } from "../hooks/useEx";
import { useEffect, useState } from "react";
import TraineeServices from "../services/traineeServices";

function MoreActions() {
    const EXERCISES = useEx();
    const { user } = useAuth()

    const location = useLocation();
    const { dayPlan, Plan, trainee, traineeId } = location.state;

    const { setPlan } = usePlan();


    const [RemoveMessage, setRemoveMessage] = useState("");
    const [message, setMessage] = useState("");

    const [exerciseId, setExerciseId] = useState("");
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(1);


    const addExercise = async () => {
        if (!trainee) {

            try {
                const data = {
                    dayName: dayPlan.day,
                    exerciseId: exerciseId,
                    sets: sets,
                    reps: reps,
                }
                const updatePlan = await usersService.addExercise(user._id, data)

                setPlan(updatePlan.data);

                setMessage("Exercise added successfully , to see your update program, you must log out of the page and log in again.")
                setTimeout(() => setMessage(""), 3000)
            } catch (err) {
                setMessage("the exercise is in a training prograp.");
                setTimeout(() => setMessage(""), 3000)
            }
        }

        if (trainee) {
            const data = {
                dayName: dayPlan.day,
                exerciseId: exerciseId,
                sets: sets,
                reps: reps,
            };

            try {
                await TraineeServices.addToTraineePlan(traineeId, data);

                setMessage("The exercise was added successfully, to see the update program, you must log out of the page and log in again.");

                setTimeout(() => setMessage(""), 3000)
            } catch (error) {
                setMessage('The exercise alredy exists in the training program.');
                setTimeout(() => setMessage(""), 3000)
            };

        }

    }

    const removeExercise = async (dayName, exerciseId) => {
        if (!trainee) {
            try {
                const data = {
                    dayName,
                    exerciseId,
                }

                await usersService.removeExercise(user._id, data);

                setRemoveMessage("Exercise removed successfully,to see your update program, you must log out of the page and log in again. ");
                setTimeout(() => setRemoveMessage(""), 3000)
            } catch (err) {
                setMessage("Error removing exercise.");
                setTimeout(() => setRemoveMessage(""), 3000)
            }
        }

        if (trainee) {
            const data = { dayName, exerciseId };
            try {
                await TraineeServices.removeFromTraineePlan(traineeId, data);

                setRemoveMessage("Exercise removed successfully,to see the update program, you must log out of the page and log in again. ");
                setTimeout(() => setRemoveMessage(""), 3000)
            } catch (error) {
                setMessage("Error removing exercise.");
                setTimeout(() => setRemoveMessage(""), 3000)
            }

        }

    }

    return (
        <div className="container text-center">
            <h3 className="m-3">Manage Exercises for {dayPlan.day}</h3>
            {RemoveMessage && <div className="alert alert-info">{RemoveMessage}</div>}

            {
                dayPlan.exercises.length > 0 ? (
                    <div className="d-flex flex-wrap justify-content-center gap-4">

                        {dayPlan.exercises.map((exercise, index) => {
                            const fullExerciseDetails = Plan.find((ex) => ex._id === exercise.exerciseId)

                            if (!fullExerciseDetails) return null;

                            return <div className="card" key={index} style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{fullExerciseDetails.name}</h5>
                                    <p className="card-text">Description: {fullExerciseDetails.description}</p>
                                    <p className="card-text">Category: {fullExerciseDetails.category}</p>
                                    <p className="card-text">Equipment: {fullExerciseDetails.equipment}</p>
                                    <p className="card-text">Location: {fullExerciseDetails.location}</p>
                                    <div className="d-flex  justify-content-around">
                                        <p className="card-text">Sets: {exercise.sets}</p>
                                        <p className="card-text">Reps: {exercise.reps}</p>
                                    </div>


                                </div>
                                <button
                                    className="btn btn-danger m-4"
                                    onClick={() => removeExercise(dayPlan.day, exercise.exerciseId)}
                                >
                                    Remove Exercise
                                </button>
                            </div>
                        })}
                    </div>
                ) : (
                    <h5>No exercises added yet. Let's add one!</h5>
                )
            }





            <h3 className="m-5">Add exercise</h3>
            <form >
                {/* {message && <div className="alert alert-secondary">{message}</div>} */}
                <div className="input-group m-3 " >
                    <select
                        onChange={(e) => setExerciseId(e.target.value)}
                        className="form-select"
                        id="inputGroupSelect02"
                    >
                        <option defaultValue="">Choose an exercise</option>
                        {EXERCISES.map((ex, index) => {
                            return <option key={index} value={ex._id}>{ex.name}</option>
                        })}
                    </select>
                </div>
                <div className="d-flex justify-content-center gap-3 ">
                    <label className="form-label">sets : </label>
                    <input
                        type="number"
                        min={1}
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        className="form-control"
                    />

                    <label htmlFor="">reps :</label>
                    <input type="number"
                        min={1}
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="button" className="btn btn-dark m-5 p-2" onClick={handleAddToPlan}>Add Exercise</button>
            </form>
        </div >
    </>
}

export default MoreAction;