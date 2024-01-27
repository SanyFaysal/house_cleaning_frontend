import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc';

export const formateTime = (time: string) => {
    return dayjs(time).format('hh : mm A')
}
export const formateDate = (date: any) => {
    const actualDate = date?.split('T')[0];
    return dayjs(actualDate).format('DD MMM YYYY ddd')
}
export const formateDateWithYear = (date: any) => {
    const actualDate = date?.split('T')[0];
    return dayjs(actualDate).format('DD MMM, YYYY')
}
export const formateDateForSchedule = (date: any) => {
    const actualDate = date?.split('T')[0];
    return dayjs(actualDate).format('YYYY-MM-DD')
}