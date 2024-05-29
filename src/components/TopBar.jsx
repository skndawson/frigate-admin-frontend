
import { 
    BellIcon,
    MagnifyingGlassIcon,
    UserIcon,
    ArrowLeftStartOnRectangleIcon
 } from "@heroicons/react/24/solid";
 import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { useState, useEffect , useRef} from "react";

function Topbar (props){
    // eslint-disable-next-line react/prop-types
    const {name} = props;
    const { userLoggedIn , currentUser } = useAuth();
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleButtonClick = () => {
        setShowMenu(!showMenu);
      };

    
    return(

        <>
        {
            userLoggedIn ? 
            <div className= "flex align-middle place-content-between  sticky w-full h-12 p-3 mt-2 z-20 ">
            <div className="ml-2">
                <span className=" text-[23px]">{name}</span>
            </div>
            <div className="flex mr-7 items-center">
                <div className="group border flex items-center w-[400px] rounded-md p-1 h-[40px] mr-10 hover:bg-[#fafafa]">
                    <MagnifyingGlassIcon className="w-5 h-5 fill-gray-300"/>
                    <input type="search" placeholder="Buscar" className="border-none w-full focus:outline-none focus:ring-0 h-0 group-hover:bg-[#fafafa]"></input>
                </div>
                <div className="mr-7">
                    <button>
                        <BellIcon className="w-5 h-5"/>
                    </button>
                </div>
                <div className="mr-7">
                    <span>{ currentUser.displayName ? currentUser.displayName : currentUser.email}</span>
                </div>
                <div>
                    <button onClick={handleButtonClick}>
                        <img src={currentUser.photoURL ? currentUser.photoURL : '/src/assets/profile-default-icon.png'} alt="User" className="w-10 h-10 rounded-md object-cover"/>
                    </button>
                        {showMenu && (
                            <div ref={ref}>
                        
                                    <ul className={`border rounded-md text-sm overflow-hidden transition-all absolute bg-white  shadow-md ${showMenu ? "right-6" : "hidden "}` }>
                                        <li className="hover:bg-[#f1f1f1] border-t-[1px] ">
                                            <button className="px-4 py-1 flex items-center" >
                                                <UserIcon className="w-4 h-4"/>
                                                <span className="ml-2">Cuenta</span>
                                            </button>
                                        </li>
                                        <li className="hover:bg-[#f1f1f1] border-t-[1px] ">
                                            <button onClick={() => doSignOut().then(()=> { 
                                                navigate('/login')
                                                setShowMenu(false) 

                                            })}  className="px-4 py-1 flex items-center" >
                                                <ArrowLeftStartOnRectangleIcon className="w-4 h-4"/>
                                                <span className="ml-2">Cerrar sesion</span>
                                            </button>
                                        </li>
                                    </ul> 
                                
                            </div>
                        )}
                    
                    

                </div>

            </div>
        </div>
        :
        <></>

        }
        
        </>
        
    );
}







export default Topbar;