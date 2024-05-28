
import { useEffect, useState } from "react";
import Topbar from "../../components/TopBar";
import { MagnifyingGlassIcon, PlusCircleIcon ,ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";


const UsuariosPage = () => {

    const [data, setData] = useState(null);

        
    useEffect(() => {
        fetch( "https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setData(data))
    }, []);

    //Table pagination
    console.log(data);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data?.slice(firstIndex, lastIndex);
    console.log(records);
    const npage = Math.ceil(data?.length / recordsPerPage);
    console.log(npage);
    //const numbers = [...Array(npage + 1).keys()].slice(1);
    //console.log(numbers);

    return (
    <div className="w-full">
    <Topbar name={"Usuarios"}/>
    <div className="p-4 relative top-8 h-[85vh]">
        <div>
            <h2>Tabla de usuarios</h2>
            <hr />
            <div className="relative top-2 flex gap-2">
                <button className="border rounded-md py-1 px-2 w-[150px] flex items-center ">
                    <PlusCircleIcon className="w-4 h-4"/>
                    <span className=" text-sm ml-1">Agregar Usuario</span>
                </button>
                <button type="search" className="border rounded-md border-gray-200">
                    <MagnifyingGlassIcon className="w-4 h-4 "/>
                </button>
            </div>
        </div>
        <div className="relative top-6  w-full">
            <table className="w-full">
                <thead>
                    <tr className="border-b-[1px] text-left text-sm text-white bg-black">
                        <th className="p-3 rounded-l-md ">Nombre</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Status</th>
                        <th>Rol</th>
                        <th className="p-1 rounded-r-md">Opciones</th>
                    </tr>
                </thead>
                            
                {records?.map((user) => (
                    <tr key={user.id} className="border-b-[1px] text-sm border-gray-200">
                        <td key={user.id} className="p-2">{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>activo</td>
                        <td>admin</td>
                        <td>opciones</td>
                    </tr>
                ))}
                                
            </table>
            <nav className="mt-5">
                <ul className="pagination flex gap-5">
                    <li className="page-item hover:underline">
                        <a href='#' onClick={prePage}  className="page-link flex items-center text-sm">
                            <ChevronLeftIcon className="w-4 h-4"/>
                            <span className="ml-1">Prev</span>
                        </a >
                    </li>
                    
                    <li className="page-item hover:underline">
                        <a href="#" onClick={nextPage} className="page-link flex items-center text-sm" >
                            <span className="mr-1">Next</span>
                            <ChevronRightIcon className="w-4 h-4"/>
                        </a>
                    </li>

                </ul>
            </nav>
           

            
        </div>
    </div>
    
    </div>
    )
    //function changeCPage(id){
    //    setCurrentPage(id);
    //}
    function nextPage(){
        if(currentPage != npage){
            setCurrentPage(currentPage + 1);
        }
    }
    function prePage(){
        if(currentPage != 1){
            setCurrentPage(currentPage - 1);
        }
    }

   

};

export default UsuariosPage;