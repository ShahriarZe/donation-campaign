import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>

        <li className="text-xl"> <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Home</NavLink></li>
        <li className="text-xl"> <NavLink to='/donations' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""} >Donation</NavLink></li>
        <li className="text-xl"><NavLink to='/statistics' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Statistics</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100 flex justify-between lg:p-5">
            <div className="navbar-start ">
                <div className="dropdown mr-28 md:mr-80 lg:mr-0">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className="w-26 lg:w-48 md:ml-24 lg:ml-0" src="../src/assets/Logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-5 px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;
