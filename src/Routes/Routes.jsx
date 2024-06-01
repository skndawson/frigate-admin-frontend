//import AreaFinanzasPage from "../pages/AreaFinanzasPage/AreaFinanzasPage";
//import HomePage from "../pages/HomePage/HomePage";
//import UsuariosPage from "../pages/UsuariosPage/UsuariosPage";
//import ComunicacionClientesPage from "../pages/ComunicacionClientePage/ComunicacionClientesPage";
//import ConfiguracionPage from "../pages/ConfiguracionPage/ConfiguracionPage";
//import GestionProductosFinancierosPage from "../pages/GestionProductosFinancierosPage/GestionProductosFinancierosPage";
//import GestionTransaccionesPage from "../pages/GestionTransaccionesPage/GestionTransaccionesPage";
//import ReporteAnalisisPage from "../pages/ReporteAnalisisPage/ReporteAnalisisPage";
//import ConexionesPage from "../pages/ConexionesPage/ConexionesPage";
//import SoporteDocumentacionPage from "../pages/SoporteDocumentacionPage/SoporteDocumentacionPage";
//import SeguridadPage from "../pages/SeguridadPage/SeguridadPage";
//import PanelFacturacionPage from "../pages/PanelFacturacionPage/PanelFacturacionPage";
//import Login from "../pages/auth/Login/LoginPage";
//import Register from "../pages/auth/Register/RegisterPage";

import React from "react";

const Home = React.lazy(() => import("../pages/HomePage/HomePage"));
const Usuarios = React.lazy(() => import("../pages/UsuariosPage/UsuariosPage"));
const ComunicacionClientes = React.lazy(() => import("../pages/ComunicacionClientePage/ComunicacionClientesPage"));
const Configuracion = React.lazy(() => import("../pages/ConfiguracionPage/ConfiguracionPage"));
const GestionProductosFinancieros = React.lazy(() => import("../pages/GestionProductosFinancierosPage/GestionProductosFinancierosPage"));
const GestionTransacciones = React.lazy(() => import("../pages/GestionTransaccionesPage/GestionTransaccionesPage"));  
const ReporteAnalisis = React.lazy(() => import("../pages/ReporteAnalisisPage/ReporteAnalisisPage"));
const Conexiones = React.lazy(() => import("../pages/ConexionesPage/ConexionesPage"));
const SoporteDocumentacion = React.lazy(() => import("../pages/SoporteDocumentacionPage/SoporteDocumentacionPage"));
const Seguridad  = React.lazy(() => import("../pages/SeguridadPage/SeguridadPage"));
const PanelFacturacion = React.lazy(() => import("../pages/PanelFacturacionPage/PanelFacturacionPage"));
const Login = React.lazy(() => import("../pages/auth/Login/LoginPage"));
const Register = React.lazy(() => import("../pages/auth/Register/RegisterPage"));
const AreaFinanzas =  React.lazy(() => import("../pages/AreaFinanzasPage/AreaFinanzasPage"));


export const routesArray = [  
    {
        path:"*",element: <React.Suspense fallback={<>Loading ...</>}> <Login/> </React.Suspense> ,
    },
    {
        path:"/login",
        element: <React.Suspense fallback={<>Loading ...</>}> <Login/> </React.Suspense> ,
    },
    {
        path:"/register",
        element: <React.Suspense fallback={<>Loading ...</>}> <Register/> </React.Suspense> ,
    },
    {
        path:"/inicio",
        element: <React.Suspense fallback={<>Loading ...</>}> <Home/> </React.Suspense> ,
    },
    {
        path:"/usuarios",
        element:<React.Suspense fallback={<>Loading ...</>}> <Usuarios/> </React.Suspense> 
            
    },
    {
        path:"/comunicacion-cliente",
        element: <React.Suspense fallback={<>Loading ...</>}> <ComunicacionClientes/> </React.Suspense> 
    },
    {
        path:"/area-finanzas",
        element: <React.Suspense fallback={<>Loading ...</>}> <AreaFinanzas/> </React.Suspense> 
    },
    {
        path:"/area-finanzas/gestion-productos-financieros",
        element: <React.Suspense fallback={<>Loading ...</>}> <GestionProductosFinancieros/> </React.Suspense> 
    },
    {
        path:"/area-finanzas/gestion-transacciones",
        element: <React.Suspense fallback={<>Loading ...</>}> <GestionTransacciones/> </React.Suspense> 
    },
    {
        path:"/area-finanzas/reporte-analisis",
        element: <React.Suspense fallback={<>Loading ...</>}> <ReporteAnalisis/> </React.Suspense> 
    },
    {
        path:"/configuracion",
        element: <React.Suspense fallback={<>Loading ...</>}> <Configuracion/> </React.Suspense> 
    },
    {
        path:"/configuracion/conexiones",
        element: <React.Suspense fallback={<>Loading ...</>}> <Conexiones/> </React.Suspense> 
    },
    {
        path:"/configuracion/soporte-documentacion",
        element: <React.Suspense fallback={<>Loading ...</>}> <SoporteDocumentacion/> </React.Suspense> 
    },
    {
        path:"/configuracion/seguridad",
        element: <React.Suspense fallback={<>Loading ...</>}> <Seguridad/> </React.Suspense> 
    },
    {
        path:"/configuracion/panel-facturacion",
        element: <React.Suspense fallback={<>Loading ...</>}> <PanelFacturacion/> </React.Suspense> 
    },
]









/** 
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
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
            { path: "/login" , element: <Login/>},
            { path: "*", element: <Login/> }
        ]
    }
]);

*/