import { useEffect, useState } from "react";
import DonationDetails from "../DonationDetails/DonationDetails";

const Donation = () => {
    const [dataLength, setDatalength] = useState(4)
    const [donation, setDonation] = useState([]);
    const [donateItem, setDonateItem] = useState("")
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('donate'))
        if (item) {
            setDonation(item)
        }
        else {
            setDonateItem('No Donations')
        }
    }, [])
    return (
        <div>
            {donateItem ? <p className="text-center text-[#FF444A] text-3xl lg:text-5xl font-bold mt-20">No Donations Yet!!!</p> :
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto gap-5 mt-10">
                        {
                            donation.slice(0, dataLength).map(donate => <DonationDetails key={donate.id} donate={donate}></DonationDetails>)
                        }
                    </div>
                    <div className={dataLength >= donation.length ? 'hidden' : ''}>
                        <div className="flex justify-center mt-5">
                            <button className="btn btn-accent" onClick={() => setDatalength(donation.length)}>SEE ALL</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;