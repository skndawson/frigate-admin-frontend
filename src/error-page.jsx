
import { useRouteError, isRouteErrorResponse } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    let errorMessage = ''
    if (isRouteErrorResponse(error)) {
        errorMessage = error.data.message || error.statusText;
    }else if(error instanceof Error){
        errorMessage = error.message;
    }else if (typeof error === 'string'){
        errorMessage = error;
    }else{
        console.log(error)
        errorMessage = 'Unkown error'
    }

    return(
        <div id='error-page' className="flex flex-col gap-8 justify-center items-center h-screen" >
            <h1 className="text-4xl font-bold"> Oops! </h1>
            <p>Sorry, an unexpected error has ocurred</p>
            <p className="text-slice-400">
                <i>{errorMessage}</i>
            </p>
        </div>
    );
};

export default ErrorPage;