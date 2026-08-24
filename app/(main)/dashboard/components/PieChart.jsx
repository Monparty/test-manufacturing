import { Pie } from "react-chartjs-2";
import { orderStatusData } from "../mockData";

const pieOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
    },
};

function PieChart() {
    return <Pie data={orderStatusData} options={pieOptions} />;
}

export default PieChart;
