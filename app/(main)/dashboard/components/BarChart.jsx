"use client";
import { BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import { machineData } from "../mockData";

import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};

ChartJS.register(BarElement);

function BarChart() {
    return <Bar data={machineData} options={barOptions} />;
}

export default BarChart;
