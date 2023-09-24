import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
    const cardStyle = {
        backgroundColor: card.card_bg_color,
        color: card.title_color
    }
    const buttonstyle = {
        color: card.text_button_bg_color,
        backgroundColor: card.card_bg_color,
        border: 'none'
    }
    const { id, picture, title, category } = card;
    return (
        <div>
            <Link to={`/details/${id}`}>
                <div className="card card-compact p-4 bg-base-100 shadow-xl" style={cardStyle}>
                    <figure><img src={picture} alt="Shoes" /></figure>

                    <div className="w-[80px]">
                        <button className="flex text-xl justify-start px-3 py-1  rounded mt-4 mb-4" style={buttonstyle}>{category}</button>
                    </div>
                    <h2 className="card-title font-bold text-xl">{title}</h2>


                </div>
            </Link>
        </div>
    );
};

export default Card;