
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, PlusCircleIcon ,ChevronLeftIcon, ChevronRightIcon ,PencilSquareIcon, TrashIcon, Cog8ToothIcon,FunnelIcon} from "@heroicons/react/24/solid";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const UsuariosPage = () => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const {userLoggedIn} = useAuth();
  
    useEffect(() => {
      fetch('https://dummyjson.com/users?limit=60')
        .then(response => response.json())
        .then(data => {
          setUsers(data.users);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    /** 
    useEffect(() => {
        fetch( "https://naubank-api.herokuapp.com/api/v1/profile/get_all_profiles",{
            headers: { 
                Accept: 'application/json',
                Authorization:'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC00NzVmNCIsImF1ZCI6ImF1dGgtNDc1ZjQiLCJhdXRoX3RpbWUiOjE3MTIyNjQ4MjAsInVzZXJfaWQiOiJNb0ZJY280N2Q1ZFdDenV6cEtjWWdrTFJZeXQxIiwic3ViIjoiTW9GSWNvNDdkNWRXQ3p1enBLY1lna0xSWXl0MSIsImlhdCI6MTcxMjI2NDgyMCwiZXhwIjoxNzEyMjY4NDIwLCJlbWFpbCI6Iml2YW5AZnJpZ2F0ZS5nbG9iYWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJpdmFuQGZyaWdhdGUuZ2xvYmFsIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.h7MSwYD5nvR_2We9VrW4LVRVQN2Q47auj_dGbkHHKvifodzgE5OMw029bZRDXBo6eKfHXFcO2rttuKzU_0XB93I2kG9Zjt4p2brqUs0NGy_xk8-UP8xbTP3-U1wb16ZQXaVBOTVYWI-UAS29A0403GJUB3244AptH1v992zBtit0gyA3CiCs7Jyyz5wZT5O7iVmr-43Ext2__dOHM2uRVI0O_6j2QQBVysE7-BIKNUpAkBBK4ilyFIxTYKdyY3gL-1bnvwlSYzCK3sbABKXKLPZYjRMl9CKskwftJupN1qg1s5cdBepc9ryNxpIJrXWh8Jz6bgTdghsfM04364ctqQ',
            }
        })
        .then((response) => response.json())
        .then((data) => setData(data))
    }, []);
    */

    //Table pagination
    const recordsPerPage = 12;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = users?.slice(firstIndex, lastIndex);
    const npage = Math.ceil(users?.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    console.log(numbers)

    
    return (
    
        <div className="flex">
            {!userLoggedIn && (<Navigate to={'/login'} replace={true}/>)}

            <div className="w-full">
                <h1 className="absolute top-5 ml-5 text-[23px]">Página de Usuarios</h1>
            <div className="p-4 relative top-8 h-[85vh]">
                <div>
                    <div className="flex justify-between">
                        <h2>Tabla de usuarios</h2>
                        <button className="border p-1 rounded-md"><Cog8ToothIcon className="w-5"/> </button>
                    </div>
                    <hr className="mt-2"/>
                    <div className="relative top-2 flex gap-2 ">
                        <button className="border rounded-md py-1 px-3  flex items-center ">
                            <PlusCircleIcon className="w-4 h-4"/>
                            <span className=" text-sm ml-2">Agregar Usuario</span>
                        </button>
                        <button className="border rounded-md py-1 px-3  flex items-center">
                            <FunnelIcon className="w-4"></FunnelIcon>
                            <span className=" text-sm ml-2"> Filtrar </span>
                        </button>
                        <button type="search" className="border rounded-md border-gray-200 p-2">
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
                                <th className="p-1 rounded-r-md text-center">Opciones</th>
                            </tr>
                        </thead>
                                    
                        {records?.map((user) => (
                            <tr key={user.id} className="text-sm border-gray-200 hover:bg-[#f1f1f1]" >
                                <td key={user.id} className="p-2">{user.firstName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>activo</td>
                                <td>admin</td>
                                <td className="flex item-center justify-center">
                                    <PencilSquareIcon className="w-4 m-1 cursor-pointer" / >
                                    <TrashIcon className="w-4 m-1 cursor-pointer"/>
                                </td>
                            </tr>
                        ))}
                                        
                    </table>
                    <nav className="mt-5 relative float-end right-5">
                        <ul className="pagination flex gap-0 items-center">
                            <li className="page-item hover:underline mr-3">
                                <a href='#' onClick={prePage}  className="page-link flex items-center text-sm">
                                    <ChevronLeftIcon className="w-4 h-4"/>
                                    <span className="ml-1">Prev</span>
                                </a >
                            </li>
                            {
                                numbers.map((n,i) => (
                                    <li className={`${currentPage === n ? 'bg-orange-200' : ''} border px-2`} key={i} >
                                        <a href="#" className="" onClick={()=> changeCPage(n)}>{n}</a>
                                    </li>
                                ))
                            }

                            
                            <li className="page-item hover:underline ml-3">
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
    
</div>


)
    function changeCPage(id){
        setCurrentPage(id);
    }
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