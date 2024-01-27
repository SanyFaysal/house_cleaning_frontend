import { IService } from "@/types/data";
import dayjs from "dayjs";
import { formateDateForSchedule } from "./formate_date_time";
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter as any);

export const scheduleReformed = (service: IService) => {
    console.log({ service })
    if (service?.schedule?.length) {
        let formattedSchedule: any[] = [];
        for (let index = 0; index < service?.schedule.length; index++) {

            const scheduleDate = service?.schedule[index]?.date;
            const currentDate = dayjs().format('YYYY-MM-DD');
            const isSameOrAfter = dayjs(formateDateForSchedule(scheduleDate)).isSameOrAfter(currentDate)
            console.log({ isSameOrAfter })

            if (isSameOrAfter) {
                const isExist = formattedSchedule?.find((schedule: any) => schedule?.date === scheduleDate)
                if (!isExist) {

                    formattedSchedule.push({
                        date: scheduleDate, scheduleTime: [{ ...service?.schedule[index] }]
                    })
                } else {
                    console.log({ notExist: true })
                    const findIndex = formattedSchedule?.findIndex(schedule => schedule?.date === scheduleDate);
                    formattedSchedule[findIndex]?.scheduleTime.push({ ...service?.schedule[index] })
                }
            }
        }

        return formattedSchedule;
    }

}