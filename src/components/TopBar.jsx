import { RiSearchLine } from '@remixicon/react';
import { TextInput } from '@tremor/react';

import { 
    BellIcon
 } from "@heroicons/react/24/solid";

function Topbar (props){
    // eslint-disable-next-line react/prop-types
    const {name} = props;
    return(
        <div className= "flex align-middle place-content-between  sticky w-full h-12 p-3 mt-2">
            <div className="ml-7">
                <span className=" text-[23px]">{name}</span>
            </div>
            <div className="flex mr-7 items-center">
                <div className="flex items-center w-[400px] rounded-md p-1 h-[40px] mr-10">
                    <TextInput icon={RiSearchLine} placeholder="Buscar" className=' focus:ring-0 focus:outline-none' />
                </div>
                <div className="mr-7">
                    <button>
                        <BellIcon className="w-5 h-5"/>
                    </button>
                </div>
                <div>
                    <button className="">
                        <img src="/src/assets/usertestimg.avif" alt="User" className="w-10 h-10 rounded-md object-cover"/>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Topbar;