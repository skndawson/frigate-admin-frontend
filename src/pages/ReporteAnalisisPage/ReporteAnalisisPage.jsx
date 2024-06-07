import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';



const ReporteAnalisisPage = () => {

    //hook auth context to check if user is logged in.
    //If user is not logged in, redirect to login page.
    const {userLoggedIn} = useAuth();

    return (
        <div className="w-full h-screen">
            {!userLoggedIn && (<Navigate to={'/login'} replace={true}/>)}

            <h1>Reporte y Analisis</h1>
        </div>
    );
}

export default ReporteAnalisisPage;