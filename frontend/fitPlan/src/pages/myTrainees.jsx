import { useState, useEffect } from "react";
import { useAuth } from "../context/auth.context";
import TraineeCard from "../commponets/traineeCard";
import TraineeServices from "../services/traineeServices";


function MyTrainess({ openModal }) {

    const [message, setMessage] = useState("");
    const [trainees, setTrainees] = useState([]);


    const { user } = useAuth();

    useEffect(() => {
        const fetchTrainees = async () => {
            const response = await TraineeServices.getAllTrainees(user._id);
            setTrainees(response.data);
        }

        fetchTrainees()
    }, []);

    const deleteTrainee = async (traineeId) => {
        const response = await TraineeServices.deleteTrainee(traineeId);
        setMessage(response.data);

        setTimeout(() => {
            setMessage("Refresh the page to see your update trainees");
        }, 5000);
    }


    return <div className="conrtainer text-center m-4">
        <h3 className="m-4">My Trainees</h3>
        <div>
            {message && <div className="alert alert-secondary container">{message}</div>}
            {(trainees.length == 0) ? (<h6>You have not trainees yet.</h6>) : (
                <div className="d-flex flex-wrap justify-content-center gap-4">

                    {trainees && trainees.length > 0 && trainees.map((trainee, index) => {
                        return <TraineeCard
                            key={index}
                            traineeInfo={trainee.traineeId}
                            deleteTrainee={deleteTrainee}

                        />
                    })}
                </div>
            )}
        </div>
        <button onClick={() => openModal('addTrainee')} className="btn btn-dark m-5" >Add Trainee</button>
    </div>


}

export default MyTrainess;