import App from "../App";
import ErrorPage from "../error-page";
import AreaFinanzasPage from "../pages/AreaFinanzasPage/AreaFinanzasPage";
import HomePage from "../pages/HomePage/HomePage";
import UsuariosPage from "../pages/UsuariosPage/UsuariosPage";
import ComunicacionClientesPage from "../pages/ComunicacionClientePage/ComunicacionClientesPage";
import ConfiguracionPage from "../pages/ConfiguracionPage/ConfiguracionPage";
import { createBrowserRouter } from "react-router-dom";
import GestionProductosFinancierosPage from "../pages/GestionProductosFinancierosPage/GestionProductosFinancierosPage";
import GestionTransaccionesPage from "../pages/GestionTransaccionesPage/GestionTransaccionesPage";
import ReporteAnalisisPage from "../pages/ReporteAnalisisPage/ReporteAnalisisPage";
import ConexionesPage from "../pages/ConexionesPage/ConexionesPage";
import SoporteDocumentacionPage from "../pages/SoporteDocumentacionPage/SoporteDocumentacionPage";
import SeguridadPage from "../pages/SeguridadPage/SeguridadPage";
import PanelFacturacionPage from "../pages/PanelFacturacionPage/PanelFacturacionPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            { path: "/inicio", element: <HomePage/> },
            { path: "/usuarios", element: <UsuariosPage/>},
            { path: "/comunicacion-cliente", element: <ComunicacionClientesPage/>},
            { path: "/area-finanzas", element: <AreaFinanzasPage/>},
            { path: "/area-finanzas/gestion-productos-financieros", element: <GestionProductosFinancierosPage/>},
            { path: "/area-finanzas/gestion-transacciones", element: <GestionTransaccionesPage/>},
            { path: "/area-finanzas/reporte-analisis", element: <ReporteAnalisisPage/>},
            { path: "/configuracion", element: <ConfiguracionPage/>},
            { path: "/configuracion/conexiones", element: <ConexionesPage/>},
            { path: "/configuracion/soporte-documentacion", element: <SoporteDocumentacionPage/>},
            { path: "/configuracion/seguridad", element: <SeguridadPage/>},
            { path: "/configuracion/panel-facturacion", element: <PanelFacturacionPage/>},
            { path: "/", element: <HomePage/> }
        ]
    }
]);