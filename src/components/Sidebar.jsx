
import { Link } from "react-router-dom";
import {
    Bars3Icon,
    HomeIcon,
    UserGroupIcon,
    ChartBarSquareIcon,
    UsersIcon,
    Cog8ToothIcon,
    ChevronDownIcon
} from "@heroicons/react/24/solid";


function Sidebar() {
  return (
    <div className="w-[280px] min-w-[280px] h-[100vh] p-3 border-r">
        <div className="border rounded-md p-2 flex items-center relative">
            <div className="mr-10 cursor-pointer">
                <Bars3Icon className="w-5 h-5" />
            </div>
            <div className="cursor-pointer">
                <img src="/src/assets/frigate_logo.png" alt="Frigate Admin Portal" className="w-[120px]" />
            </div>
            
        </div>

        <div className="mt-5">
            <div>
                <div className="hover:bg-[#fafafa] hover:font-semibold rounded-md p-1">
                    <Link to={`/home`} className="p-2 flex items-center">
                        <HomeIcon className="w-4 h-4"/>
                        <span className="ml-2 text-sm">Inicio</span>
                    </Link>
                </div>
                <div className="hover:bg-[#fafafa] hover:font-semibold rounded-md p-1">
                    <Link to={`/usuarios`} className="p-2 flex items-center">
                        <UserGroupIcon className="w-4 h-4"/>
                        <span className="ml-2 text-sm">Usuarios</span>
                    </Link>
                </div>
                <div className="hover:bg-[#fafafa] hover:font-semibold rounded-md p-1 ">
                    <Link to={`/area-finanzas`} className="p-2 flex items-center relative">
                        <ChartBarSquareIcon className="w-4 h-4"/>
                        <span className="ml-2 text-sm">Area Finanzas</span>
                    </Link>
                    <div className="relative float-end top-[-25px] ">
                        <ChevronDownIcon className="w-4 h-4"/>
                    </div>
                </div>
                <div className="hover:bg-[#fafafa] hover:font-semibold rounded-md p-1">
                    <Link to={`/comunicacion-cliente`} className="p-2 flex items-center">
                        <UsersIcon className="w-4 h-4"/>
                        <span className="ml-2 text-sm">Comunicacion con Clientes</span>
                    </Link>
                </div>
                <div className="hover:bg-[#fafafa] hover:font-semibold rounded-md p-1">
                    <Link to={`/configuracion`} className="p-2 flex items-center">
                        <Cog8ToothIcon className="w-4 h-4"/>
                        <span className="ml-2 text-sm">Configuracion</span>
                    </Link>
                    <div className="relative float-end top-[-25px] ">
                        <ChevronDownIcon className="w-4 h-4"/>
                    </div>
                    
                </div>
                
                
                
            </div>

        </div>




    </div>

  );
}

export default Sidebar;