import {
    HomeIcon,
    UserGroupIcon,
    ChartBarSquareIcon,
    UsersIcon,
    Cog8ToothIcon,
    ChevronDownIcon,
    ChevronUpIcon
  } from "@heroicons/react/24/solid";
  

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/inicio',
        icon: <HomeIcon className='w-5 h-5'/>,
        iconClosed:<ChevronDownIcon className='w-4 h-4' />,
        iconOpened:<ChevronUpIcon className='w-4 h-4' />
    },
    {
        title: 'Usuarios',
        path: '/usuarios',
        icon: <UserGroupIcon className='w-5 h-5' />,
        iconClosed:<ChevronDownIcon className='w-4 h-4' />,
        iconOpened:<ChevronUpIcon className='w-4 h-4' />
    },
    {
        title: 'Area Finanzas',
        path: '/area-finanzas',
        icon: <ChartBarSquareIcon className='w-5 h-5' />,
        iconClosed:<ChevronDownIcon className='w-4 h-4' />,
        iconOpened:<ChevronUpIcon className='w-4 h-4' />,
        subNav:[
            { 
                title: 'Gestion de Productos Financieros',
                path: '/area-finanzas/gestion-productos-financieros'
            },
            { 
                title: 'Gestion de transacciones',
                path: '/area-finanzas/gestion-transacciones'
            },
            {
                title: 'Reporte y Analisis',
                path: '/area-finanzas/reporte-analisis'
            }
        ]
    },
    {
        title: 'Comunicacion con clientes',
        path: '/comunicacion-cliente',
        icon: <UsersIcon className='w-5 h-5' />,
        iconClosed:<ChevronDownIcon className='w-4 h-4' />,
        iconOpened:<ChevronUpIcon className='w-4 h-4' />
    },
    {
        title: 'Configuracion',
        path: '/configuracion',
        icon: <Cog8ToothIcon className='w-5 h-5' />,
        iconClosed:<ChevronDownIcon className='w-4 h-4' />,
        iconOpened:<ChevronUpIcon className='w-4 h-4' />,
        subNav:[
            {
                title: 'Conexiones',
                path: '/configuracion/conexiones'
            },
            {
                title: 'Soporte y Documentacion',
                path: '/configuracion/soporte-documentacion'
            },
            {
                title: 'Seguridad',
                path: '/configuracion/seguridad'
            },
            {
                title: 'Panel de Facturacion',
                path: '/configuracion/panel-facturacion'
            }
        ]
    }
]