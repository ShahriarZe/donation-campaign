import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { searchValue } from '../Root/Root'

const DisplayCards = () => {
    const [cards, setCards] = useState([])
    const { value } = searchValue()
    console.log(value);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    const filteredData = cards.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl mx-auto mt-10 gap-5">
            {
                filteredData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default DisplayCards;