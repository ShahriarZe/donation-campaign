/* eslint-disable react/prop-types */
const Card = ({ card }) => {
    const cardStyle = {
        backgroundColor: card.card_bg_color,
        color: card.title_color
    }
    const { picture, title, category } = card;
    return (
        <div className="card card-compact p-4 bg-base-100 shadow-xl" style={cardStyle}>
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <div>{category}</div>
                <h2 className="card-title">{title}</h2>

            </div>
        </div>
    );
};

export default Card;