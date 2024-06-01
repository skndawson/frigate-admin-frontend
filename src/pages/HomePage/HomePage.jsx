import { CardList } from "../../components/CardList";
import { CardStats } from "../../components/CardStats";
import { ChartArea } from "../../components/ChartArea";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";


const HomePage = () => {

    //hook auth context
    const {userLoggedIn} = useAuth();

    return (
        
        <div className="w-full z-0">
            {!userLoggedIn && (<Navigate to={'/login'} replace={true}/>)}

            <div className="p-2 relative top-8">
                <div className="grid grid-cols-4 gap-2">
                    <CardStats title={"Total Socios"} value={"24560"}></CardStats>
                    <CardStats title={"Valor de Cartera"} value={"$ 1780644"}></CardStats>
                    <CardStats title={"Total de inversiones"} value={"$ 3440000"}></CardStats>
                    <CardStats title={"Total de ganancias"} value={"$ 2300540"}></CardStats>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                    <div className="w-[600px] border rounded-md p-3">
                        <ChartArea/>
                    </div>
                    <div>
                        <CardList/>
                    </div>
                

                </div>
            </div>
        
        </div>
        

        
    );
};

export default HomePage;