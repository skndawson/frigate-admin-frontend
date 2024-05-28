
import './App.css'
import { Outlet } from 'react-router-dom';
import  { Sidebar,SidebarItem } from './components/Sidebar';

import {
  HomeIcon,
  UserGroupIcon,
  ChartBarSquareIcon,
  UsersIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";



function App() {
  return (
    <>
      <div className='flex'>
        <Sidebar>
          <SidebarItem route="/inicio" icon={<HomeIcon className='w-5 h-5' />} text="Inicio" />
          <SidebarItem route="/usuarios" icon={<UserGroupIcon className='w-5 h-5'/>} text="Usuarios"/>
          <SidebarItem route="/area-finanzas" icon={<ChartBarSquareIcon className='w-5 h-5'/>} text="Area Finanzas"/>
          <SidebarItem route="/comunicacion-cliente" icon={<UsersIcon className='w-5 h-5'/>} text="Comunicacion con clientes"/>
          <SidebarItem route="/configuracion" icon={<Cog8ToothIcon className='w-5 h-5'/>} text="Configuracion"/>
        </Sidebar>
        <Outlet/>
      </div>
    </>
  )
}

export default App
