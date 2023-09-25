const Banner = () => {
    return (

        <div className="hero min-h-screen bg-[url('/src/assets/Rectangle-4281.png')]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h2 className="text-center font-bold text-3xl lg:text-7xl">I Grow By Helping People In Need</h2>
                    <div className="form-control flex justify-center items-center">
                        <div className="mt-10">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered text-black font-bold" />
                                <button className="btn btn-error">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;