import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            this is main layout 

           
            <Outlet/>
        </div>
    );
};

export default MainLayout;