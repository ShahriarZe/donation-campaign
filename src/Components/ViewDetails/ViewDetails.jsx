import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const { id } = useParams();
    const cards = useLoaderData();

    const card = cards.find(cards => cards.id == id)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto">
                <div className=" mt-10">
                    <img className="w-[100vh]" src={card.picture} alt="" />
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