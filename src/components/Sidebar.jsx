/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";



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

export function Sidebar({children}) {

  const [expanded, setExpanded] = useState(true);

  return (
    <div className=" h-[100vh] p-2 border-r bg-[#fafafa]">
        <div className="border rounded-md p-3 flex items-center justify-center">
            <button onClick={()=> setExpanded(curr => !curr)}>
                <Bars3Icon className="w-5 " />
            </button>
            <div className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 "}`}>
                <img src="/src/assets/frigate_logo.png" alt="Frigate Admin Portal" className="w-[120px] ml-6" />
            </div>
        </div>

        <SidebarContext.Provider value={{expanded}}> 
            <div className="mt-8">{children}</div>
        </SidebarContext.Provider>
    </div>
  );
}
//--------------------------------------------------------------------------------------------------------------------



/**
 * Represents Sidebar Items component
 * @param {Object} props - The component props
 * @param {JSX.Element} props.icon - The icon to render
 * @param {string} props.text - The text to render
 * @param {boolean} props.active - The active state of the item 
 * @returns {React.ReactElement} - The sidebar item component
 */

export function SidebarItem({icon,text,route,active}){

    const {expanded} = useContext(SidebarContext);
        
    return (
        <div className={`relative hover:bg-[#f1f1f1] rounded-md
                        ${active ? "bg-[#f1f1f1] font-semibold" : ""}` }>

            <Link to={route} className="p-3 flex items-center hover:font-semibold mt-2 rounded-md">
                {icon}
                <span className={`absolute overflow-hidden transition-all text-sm ${expanded ? "w-52 ml-8" : "w-0"}`} >{text}</span>
            </Link>
        </div>
    )
}

