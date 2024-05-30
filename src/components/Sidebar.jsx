/* eslint-disable react/prop-types */
import { useState,useContext,createContext } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { SidebarData } from "../data/SidebarData";
import { useAuth } from "../context/authContext";


const SidebarContext = createContext(); // Create a context to store the sidebar state


//--------------------------------------------------------------------------------------------------------------------
/**
 * Represents a sidebar component.
 *
 * @component
 * @param props - The component props.
 * @param props.children - The children to render inside the sidebar.
 * @returns {React.ReactElement} The sidebar component.
 */

export function Sidebar() {

  const [expanded, setExpanded] = useState(true);

  const { userLoggedIn } = useAuth();

  return (
    <>
        {
             userLoggedIn ? 
            <div className=" h-[100vh] p-2 border-r bg-[#fafafa]">
                <div className="border rounded-md p-3 flex items-center justify-center">

                    <button onClick={()=> setExpanded(curr => !curr)} name="nav-bars" >
                        <Bars3Icon className="w-5 " />
                    </button>
                    <div className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 "}`}>
                        <link rel="preload"  as="image" href="/src/frigate_logo-optimized.webp" type="image/webp" />
                        <img src="/src/assets/frigate_logo-optimized.webp" alt="Frigate Admin Portal" className="w-[120px] h-[28px] ml-6" />
                    </div>
                </div>

                <SidebarContext.Provider value={{expanded}}>
                    <div className="mt-8">
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />
                        })}
                    </div>
                </SidebarContext.Provider>
                
            </div>
            :
            <></>
        

        }
        
    </>
  );
}
//--------------------------------------------------------------------------------------------------------------------




/**
 * Represents a submenu component.
 *
 * @component
 * @param props - The component props.
 * @param {Object} props.item - The item to render in the submenu.
 * @returns {React.ReactElement} The submenu component.
 */


const Submenu = ({item}) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    const {expanded} = useContext(SidebarContext);

    return (
        <>
            <Link to={item.path} className="p-3 flex items-center hover:bg-[#f1f1f1] hover:font-semibold mt-2 rounded-md relative" onClick={item.subNav && showSubnav}>
                <div className="flex items-center relative">
                    {item.icon}
                    <span className={`absolute overflow-hidden transition-all text-sm ${expanded ? "w-52 ml-8" : "w-0"}`}>{item.title}</span>
                </div>
                <div className={`absolute  overflow-hidden transition-all ${expanded ? "right-0" : 'w-0'  } `}>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </Link>

            { 
            expanded && subnav && item.subNav.map((item, index) => {
                return (
                    <Link to={item.path} key={index} className="p-2 mt-4 flex items-center  hover:font-semibold mt-1 rounded-md relative left-8 w-fit">
                        <span className={`absolute overflow-hidden transition-all text-sm ${expanded ? "w-52" : "w-0"}`}>{item.title}</span>
                    </Link>
                )
            })}
        </>
    )
}

