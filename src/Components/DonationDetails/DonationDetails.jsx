/* eslint-disable react/prop-types */
const DonationDetails = ({ donate }) => {
    const { picture, title, category, price } = donate
    const cardStyle = {
        backgroundColor: donate.card_bg_color,
        color: donate.title_color
    }
    const buttonstyle = {
        color: donate.text_button_bg_color,
        backgroundColor: donate.card_bg_color,
        border: 'none'
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl" style={cardStyle}>
            <figure><img src={picture} alt="Movie" /></figure>
            <div className="card-body">
            <div className="w-[80px]">
                        <button className="flex text-xl justify-start px-3 py-1  rounded mt-4 mb-4" style={buttonstyle}>{category}</button>
                    </div>
                <h2 className="card-title text-black">{title}</h2>
                <p>$ {price}</p>
                <div className="card-actions ">
                    <button className="btn" style={buttonstyle}>Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;