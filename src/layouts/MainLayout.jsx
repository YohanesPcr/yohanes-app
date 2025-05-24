import Sidebar from "../components/Sidebar";  
import Header from "../components/Header";  
import { Outlet } from "react-router-dom";  

export default function MainLayout() {  
  return (  
    <div id="app-container" className="h-screen w-screen flex overflow-hidden">  
      <div id="layout-wrapper" className="flex flex-row min-h-screen min-w-full">  
        <Sidebar />  
        <div id="main-content" className="flex-1 p-4">  
          <Header />  
          <Outlet />  
        </div>  
      </div>  
    </div>  
  );  
}  