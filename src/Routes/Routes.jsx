import App from "../App";
import ErrorPage from "../error-page";
import AreaFinanzasPage from "../pages/AreaFinanzasPage/AreaFinanzasPage";
import HomePage from "../pages/HomePage/HomePage";
import UsuariosPage from "../pages/UsuariosPage/UsuariosPage";
import ComunicacionClientesPage from "../pages/ComunicacionClientePage/ComunicacionClientesPage";
import ConfiguracionPage from "../pages/ConfiguracionPage/ConfiguracionPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            { path: "/home", element: <HomePage/> },
            { path: "/usuarios", element: <UsuariosPage/>},
            { path: "/comunicacion-cliente", element: <ComunicacionClientesPage/>},
            { path: "/area-finanzas", element: <AreaFinanzasPage/>},
            { path: "/configuracion", element: <ConfiguracionPage/>},
            { path: "/", element: <HomePage/> }
        ]
    }
]);