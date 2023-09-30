import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="flex  justify-between  ">
            <Link to ="/">Home</Link>
            <Link to= "/login"> Login </Link>
            </div>
            
        </div>
    );
};

export default Header;