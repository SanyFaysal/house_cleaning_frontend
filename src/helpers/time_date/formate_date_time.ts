import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc';

export const formateTime = (time: string) => {
    return dayjs(time).format('hh : mm A')
}
export const formateDate = (date: any) => {
    const actualDate = date.split('T')[0];
    return dayjs(actualDate).format(' DD MMM, YYYY')
}