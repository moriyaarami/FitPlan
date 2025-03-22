import { useLocation } from "react-router-dom"
import { usePlan } from "../context/plan.context";
import PlanCard from "../commponets/planCard";
import { use } from "react";

function MoreInfo() {

    const location = useLocation();
    const { traineeInfo } = location.state;
    console.log(traineeInfo)

    const { plan } = usePlan()


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