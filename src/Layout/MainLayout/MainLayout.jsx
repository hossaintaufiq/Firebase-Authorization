import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto">
                <Header />

                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;