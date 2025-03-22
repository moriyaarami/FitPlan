
import { useEx } from "../hooks/useEx";
function ExCard({ exercise }) {

    return <>
        <div className="card" style={{ width: "18rem" }}>
            {/* <div className="card-body">
                <h5 className="card-title">{ex.name}</h5>

                <h6 className="card-subtitle mb-2 text-muted">{ex.description}</h6>

                <p className="card-text">category: {ex.category}</p>
                <p className="card-text">difficulty: {ex.difficulty}</p>
                <p className="card-text">equipment: {ex.equipment}</p>
                <p className="card-text">location: {ex.location}</p>
                ex
                <div className="d-flex  justify-content-around">
                    <p><span className="text-uppercase fw-bold">sets:</span> {Planexercises.sets}</p>
                    <p><span className="text-uppercase fw-bold">reps:</span> {Planexercises.reps}</p>
                </div>


            </div> */}
        </div >

    </>
}

export default ExCard;