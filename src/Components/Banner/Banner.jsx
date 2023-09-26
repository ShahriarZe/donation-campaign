import { useState } from 'react';
import { searchValue } from '../Root/Root'
const Banner = () => {
    const [inputData, setInputData] = useState('')
    const { setValue } = searchValue()
    const handleSubmit = (e) => {
        e.preventDefault()
        setValue(inputData)
    }
    const handleChange = (e) => {
        setInputData(e.target.value)
    }
    return (

        <div className="hero min-h-screen bg-[url('/src/assets/Rectangle-4281.png')]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h2 className="text-center font-bold text-3xl lg:text-7xl">I Grow By Helping People In Need</h2>
                    <div className="form-control flex justify-center items-center">
                        <div className="mt-10">
                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange} type="text" placeholder="Search…" className="input input-bordered text-black font-bold" />
                                <input type='submit' value='search' className="btn btn-error" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;