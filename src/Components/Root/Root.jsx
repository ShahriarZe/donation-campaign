import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
           <div>
           <Header></Header>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;