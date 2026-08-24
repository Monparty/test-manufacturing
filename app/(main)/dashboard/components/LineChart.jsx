import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
import { productionData } from "../mockData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const lineOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
    },
};

function LineChart() {
    return <Line data={productionData} options={lineOptions} />;
}

export default LineChart;
