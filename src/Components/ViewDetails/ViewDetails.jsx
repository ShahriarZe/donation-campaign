import swal from 'sweetalert';
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {

    const { id } = useParams();
    const cards = useLoaderData();

    const card = cards.find(cards => cards.id == id)
    const buttonstyle = {
        color: 'white',
        backgroundColor: card.title_color,
        border: `2px solid ${card.text_button_bg_color}`,
        borderRadius: '5px'
    }
    const handleDonate = () => {
        const donatedItems = [];
        const item = JSON.parse(localStorage.getItem('donate'))
        if (!item) {
            donatedItems.push(card)
            localStorage.setItem('donate', JSON.stringify(donatedItems))
            swal("Donation", "Successfully Added", "success")
        }
        else {
            const isExist = item.find(card => card.id == id)
            if (!isExist) {
                donatedItems.push(...item, card)
                localStorage.setItem('donate', JSON.stringify(donatedItems))
                swal("Donation", "Successfully Added", "success")
            }
            else {
                swal("OOPS", "Already Added", "error")
            }
        }
    }
    return (
        <div className=" md:ml-20 ">
            <div className=" max-w-7xl mx-auto">
                <div className=" mt-10 relative">
                    <img className="w-[100vh]" src={card.picture} alt="" />
                    <div className='inset-0 bg-black opacity-60 h-[90px]
                     top-[175px] left-[0px] md:w-[585px] md:top-[275px] lg:w-[930px] lg:h-[150px] absolute lg:-left-[0px] lg:top-[430px]'>

                    </div>
                </div>
                <div className='bg-black'>
                </div>
                <div>
                    <button onClick={handleDonate} className="p-3 font-bold absolute bottom-56 left-6 md:left-24 md:bottom-28 lg:bottom-64 lg:left-96" style={buttonstyle}>Donate ${card.price}</button>
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-left mt-10">{card.title}</h2>
                    <p className="text-2xl text-left mt-5">{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;