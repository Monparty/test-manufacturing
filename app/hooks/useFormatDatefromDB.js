import dayjs from "dayjs";

export const formatDatefromDB = (date) => {
    const formayDate = dayjs(date).add(543, "year").format("DD/MM/YYYY");
    return formayDate;
};
