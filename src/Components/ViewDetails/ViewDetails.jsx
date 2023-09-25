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
        if (!item){
            donatedItems.push(card)
            localStorage.setItem('donate',JSON.stringify(donatedItems))
            swal("Great Job","Successfully Added","success")
        }
        else{
            const isExist = item.find(card=>card.id == id)
            if(!isExist){
                donatedItems.push(...item,card)
                localStorage.setItem('donate',JSON.stringify(donatedItems))
                swal("Great Job","Successfully Added","success")
            }
            else{
                swal("OOPS","Already Added","error")
            }
        }
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto">
                <div className=" mt-10 relative">
                    <img className="w-[100vh]" src={card.picture} alt="" />
                </div>
                <div>
                    <button onClick={handleDonate} className="p-3 font-bold absolute bottom-32 lg:bottom-72 lg:left-96" style={buttonstyle}>Donate {card.price} $</button>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-left mt-10">{card.title}</h2>
                <p className="text-2xl text-left mt-5">{card.description}</p>
            </div>
        </div>
    );
};

export default ViewDetails;