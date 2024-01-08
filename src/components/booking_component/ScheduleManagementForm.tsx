'use client'
'use client'
import { scheduleReformed } from "@/helpers/schedule_reformed_array";
import { formateDate, formateTime } from "@/helpers/formate_date_time";
import { IService } from "@/types/data";
import { DatePicker, Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export default function ScheduleManagementForm({
    service, setGoNext }
    : { service: IService, setGoNext: any }) {
    const [schedules, setSchedules] = useState<any>();
    const reformedSchedule = scheduleReformed(service);
    const getBookingData: any = getFromLocalStorage('bookingData')?.length ? JSON.parse(getFromLocalStorage('bookingData') as string) : {};

    const handleSelectScheduleDate: any = (schedule: any) => {
        const bookingData = {
            ...getBookingData,
            date: schedule,
            id: ""
        }
        setToLocalStorage('bookingData', JSON.stringify(bookingData))
        setSchedules(schedule)
    }
    const handleSelectScheduleTime = (schedule: any) => {
        const bookingData = {
            ...getBookingData,
            id: schedule?.id
        }
        setToLocalStorage('bookingData', JSON.stringify(bookingData))
    }

    useEffect(() => {
        setSchedules(getBookingData?.date)
        if (getBookingData?.date && getBookingData?.id) {
            setGoNext(true)
        }
    }, [getBookingData])
    return (
        <div>
            <Content className="flex flex-col items-center">
                <h1 className="text-xl mb-6 text-center">Select a Date  schedule</h1>

                <div className="flex justify-center gap-5">
                    {
                        reformedSchedule?.map((schedule: any, index: number) => (<div key={index}>
                            <button onClick={() => handleSelectScheduleDate(schedule)} className="flex gap-4 mb-5">
                                <span className={`bg-white p-4 border  rounded
                                ${getBookingData?.date?.date === schedule?.date && "bg-sky-500 text-white"}`}> {formateDate(schedule?.date)}</span>
                            </button>
                        </div>)

                        )
                    }

                </div>
                {schedules && <div className=" my-5">
                    <h3 className="text-xl my-5 text-center">Choose from Available Time Schedule</h3>

                    <div className="flex flex-wrap mx-auto justify-center gap-10">

                        {
                            schedules?.scheduleTime?.map((scheduleTime: any, index: number) =>
                                <button onClick={() => !scheduleTime?.booking
                                    && handleSelectScheduleTime(scheduleTime)}
                                    key={index}
                                    className={`bg-white p-4 rounded
                                      ${scheduleTime?.booking ? 'text-gray-200' : ''}
                                      ${getBookingData?.id === scheduleTime?.id ? 'text-white bg-sky-500' : ''}
                                      `}
                                >
                                    {formateTime(scheduleTime?.startTime)}
                                    - {formateTime(scheduleTime?.endTime)}
                                </button>

                            )
                        }
                    </div>
                </div>}
            </Content>
        </div>
    )
}
