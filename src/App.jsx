
import './App.css'
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { routesArray } from './Routes/Routes';
import { Sidebar } from './components/Sidebar';
import Topbar from './components/TopBar';


function App() {

  //useRoutes is a hook from react-router-dom that takes an array of routes and returns the first route that matches the current URL.
  //routesArray is an array of routes that are defined in src/Routes/Routes.js
  let routesElement = useRoutes(routesArray);


  
  //AuthProvider is a context provider that wraps the entire application.
  //This way, all the components in the application can access the auth context.
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
