export const productionData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Produced",
            data: [120, 150, 135, 180, 160, 200, 175],
            borderWidth: 2,
        },
        {
            label: "Failed",
            data: [8, 12, 6, 10, 7, 15, 9],
            borderWidth: 2,
        },
    ],
};

export const machineData = {
    labels: ["Machine A", "Machine B", "Machine C", "Machine D"],
    datasets: [
        {
            label: "Production",
            data: [320, 280, 410, 250],
            borderWidth: 1,
        },
    ],
};

export const orderStatusData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
        {
            data: [65, 20, 15],
            borderWidth: 1,
        },
    ],
};
