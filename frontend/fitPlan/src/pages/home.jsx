import { useEffect } from "react";
import PageHeader from "../commponets/common/pageHeader";
import Logo from "../commponets/logo";
import cardService from "../services/exercise";
import { useEx } from "../hooks/useEx";
import Card from "../commponets/card";

function Home() {
    const exercises = useEx();
    return <>
        <div className="container">
            <PageHeader titel={<Logo />} />
            <div className=" d-flex flex-wrap justify-content-center  gap-4 p-2" >

                {!exercises.length ? (
                    <p>Loading...</p>
                ) : (exercises.map((ex) => <Card card={ex} key={ex._id}></Card>))}

            </div >
        </div>



    </>
}

export default Home;