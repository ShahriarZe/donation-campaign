import { useEffect, useState } from "react";
import DonationDetails from "../DonationDetails/DonationDetails";

const Donation = () => {
    const [donation,setDonation]=useState([]);
    const [donateItem,setDonateItem]=useState("")
    const [display,setDisplay]=useState(false)
    useEffect(()=>{
        const item = JSON.parse(localStorage.getItem('donate'))
        if(item){
            setDonation(item)
        }
        else{
            setDonateItem('No Donations')
        }
    },[])
    return (
        <div>
            { donateItem ? <p className="text-center text-[#FF444A] text-3xl lg:text-5xl font-bold mt-20">No Donations Yet!!!</p> :
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto gap-5 mt-10">
                    {
                        display ? donation.map(donate=><DonationDetails key={donate.id} donate={donate}></DonationDetails> ):
                        donation.slice(0,4).map(donate => <DonationDetails key={donate.id} donate={donate}></DonationDetails>)
                    }
                </div>
                <div className="text-center mt-5">
                    <button className="btn btn-accent" onClick={()=>setDisplay(!display)}>SEE ALL</button>
                </div>
            </div>
            }
        </div>
    );
};

export default Donation;