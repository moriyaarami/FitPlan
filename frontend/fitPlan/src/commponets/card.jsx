
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({
    card: {
        _id, name, description, category, image, difficulty, equipment, location
    },
}) {
    return (

        <div className="card" style={{ width: "14rem" }}>
            {/*  <img src={image.url} className="card-img-top" alt={image.alt} /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{category}</p>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span><i className="bi bi-bar-chart-fill"></i></span> {difficulty}</li>
                    <li className="list-group-item"><span> {/* <FontAwesomeIcon icon="fa-solid fa-dumbbell" /> */} </span> {equipment}</li>
                    <li className="list-group-item"><span><i className="bi bi-geo-fill"></i></span> {location}</li>
                </ul>

                {/*    <Link to={`/my-cards/edit/${_id}`} className="card-link">
                    edit
                </Link>
                <Link to={`/my-cards/delete/${_id}`} className="card-link">
                    delete
                </Link> */}
            </div>
        </div>
    );
};

export default Card;