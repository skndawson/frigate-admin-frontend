
import './App.css'
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { routesArray } from './Routes/Routes';
import { Sidebar } from './components/Sidebar';
import Topbar from './components/TopBar';


function App() {

  let routesElement = useRoutes(routesArray);
 
  return (
    
    <AuthProvider>
        <div className='flex'>
            <Sidebar/>
            <div className='w-full h-screen flex flex-col'>
              <Topbar/>
              {routesElement}
              </div>
        </div>
        
    </AuthProvider>
    
  )
}

export default App
