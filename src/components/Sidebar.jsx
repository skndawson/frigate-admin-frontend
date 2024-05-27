
import { Link } from "react-router-dom";
import {
    Bars3Icon,
    HomeIcon,
    UserGroupIcon
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
                <div className="hover:bg-[#fafafa] hover:font-semibold rounded-md">
                    <Link to={`/home`} className="p-2 flex items-center">
                        <HomeIcon className="w-4 h-4"/>
                        <span className="ml-2 text-sm">Inicio</span>
                    </Link>
                </div>
                <div className="hover:bg-[#fafafa] hover:font-semibold rounded-md">
                    <Link to={`/usuarios`} className="p-2 flex items-center">
                        <UserGroupIcon className="w-4 h-4"/>
                        <span className="ml-2 text-sm">Usuarios</span>
                    </Link>
                </div>
            </div>

        </div>




    </div>

  );
};

export default Sidebar;