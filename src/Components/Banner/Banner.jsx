const Banner = () => {
    return (
           <div className="bg-[url('/src/assets/Rectangle-4281.png')] bg-cover bg-blend-overlay bg-no-repeat h-[80vh] py-48 ">
            <h2 className="text-center font-bold text-5xl">I Grow By Helping People In Need</h2>
            <div className="form-control flex justify-center items-center">
                <div className="mt-10">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-error">
                        Search
                    </button>
                </div>
                </div>
            </div>
        </div>
     

    );
};

export default Banner;