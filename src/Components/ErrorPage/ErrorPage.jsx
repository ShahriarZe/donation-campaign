import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-5xl font-bold mt-20 text-[#FF444A]">
            <h2>404 !!!</h2>
            <h2 className="mt-5">No Pages Found</h2>
           <NavLink to='/'>
           <button className="btn btn-error mt-10" >Go HOME</button>
           </NavLink>
        </div>
    );
};

export default ErrorPage;