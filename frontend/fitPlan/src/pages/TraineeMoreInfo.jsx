import { useLocation } from "react-router-dom"
import { usePlan } from "../context/plan.context";
import PlanCard from "../commponets/planCard";
import { useEffect } from "react";
import TraineeServices from "../services/traineeServices";

function MoreInfo() {

    const { plan, setPlan } = usePlan();

    const location = useLocation();
    const { traineeInfo } = location.state;

    useEffect(() => {
        const fetchTrainee = async () => {
            const response = await TraineeServices.getTraineeById(traineeInfo._id);
            setPlan(response.data[0].myPlan)
        }

        fetchTrainee()
    }, [])


    return <>
        <div className="container text-center p-4">
            <h3 className="p-2">Program Plan</h3>

            <div className="d-flex flex-wrap justify-content-center gap-4">
                {
                    plan.map((dayPlan, index) => {
                        return <PlanCard key={index} dayPlan={dayPlan} trainee={true} traineeId={traineeInfo._id} />
                    })
                }
            </div>
        </div>
    </>
}

export default MoreInfo