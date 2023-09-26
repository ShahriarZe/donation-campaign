/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ApexChart from "react-apexcharts"

const Statistics = () => {
    const [data, setData] = useState([])
    const [donateId, setDonateId] = useState([])
    const [percentValue, setPercentValue] = useState(0)
    console.log(donateId);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(item => setData(item))
        const localData = JSON.parse(localStorage.getItem('donate'))
        if (localData) {
            setDonateId(localData)
        }
    }, [])
    useEffect(() => {
        const amount = donateId.reduce((acc, singleId) => {
            const matchId = data.find((item) => item.id === singleId.id)
            if (matchId) {
                return acc + matchId.price
            }
            return acc
        }, 0)
        if (amount > 0 && data.length > 0) {
            const totalDonation = data.reduce((acc, donatePrice) => acc + donatePrice.price, 0)
            const calculateData = (amount / totalDonation) * 100
            setPercentValue(calculateData)
        }
        else {
            setPercentValue(0)
        }
    }, [donateId, data])
    const userPercentage = 100 - percentValue;
    const chartData = [{
        name: 'Your Donation',
        data: 100 - userPercentage,
    },
    {
        name: 'Total Donations',
        data: userPercentage,
    }]
    const settings = {
        lebels: chartData.map(item => item.name),
        legend: {
            position: 'bottom'
        }

    }
    return (
        <div className=''>
            <div>
                <ApexChart
                    options={settings}
                    series={chartData.map(item => item.data)}
                    type="pie"
                    width={500}
                ></ApexChart>
            </div>
        </div>
    );
};

export default Statistics;