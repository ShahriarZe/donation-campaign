import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { createContext, useContext, useState } from "react";
const InputValue = createContext()
export const searchValue = () => useContext(InputValue)

const Root = () => {
    const [value, setValue] = useState('')
    return (
        <InputValue.Provider value={{ value, setValue }}>
            <div>
                <div className="max-w-7xl mx-auto">
                    <Header></Header>
                </div>
                <Outlet></Outlet>
            </div>
        </InputValue.Provider>
    );
};

export default Root;