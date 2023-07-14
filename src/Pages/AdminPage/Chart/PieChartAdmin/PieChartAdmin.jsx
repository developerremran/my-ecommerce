
import { PieChart, Pie,  } from 'recharts';
import CategoryData from '../../../../API/CategoryData';




const PieChartAdmin = () => {
    const [productCategory,productCategory1,productCategory2]=CategoryData()

    const productCount = productCategory.length +productCategory1.length+ productCategory2.length;

   
    const data = [
        { name: 'Group A', value:productCount },
        { name: 'Group B', value: productCount },
        { name: 'Group C', value: productCount },
        { name: 'Group D', value: productCount },
        { name: 'Group E', value: productCount },
        { name: 'Group F', value: productCount },
    ];
    return (

        <div className=''>
            <PieChart width={600} height={500}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
            </PieChart>
        </div>

    );
};

export default PieChartAdmin;