import { PieChart } from 'react-minimal-pie-chart';
const Statistics = () => {
    return (
        <div className='max-w-xl mx-auto mt-20'>
            <div>
            <PieChart
                data={[
                    { title: 'One', value: 50, color: '#E38627' },
                    { title: 'Two', value: 50, color: '#C13C37' },

                ]}
            />;
            </div>
        </div>
    );
};

export default Statistics;