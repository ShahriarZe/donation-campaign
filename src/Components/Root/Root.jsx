import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
           <div className="max-w-7xl mx-auto">
           <Header></Header>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;