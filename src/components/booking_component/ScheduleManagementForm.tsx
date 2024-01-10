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
    const [isLoading, setIsLoading] = useState<boolean>(false)
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
        setSchedules(schedule);
        setIsLoading(!isLoading)
    }
    const handleSelectScheduleTime = (schedule: any) => {
        const bookingData = {
            ...getBookingData,
            id: schedule?.id
        }
        setToLocalStorage('bookingData', JSON.stringify(bookingData));
        setIsLoading(!isLoading)
    }

    useEffect(() => {
        if (getBookingData?.date) {
            setSchedules(getBookingData?.date)
        }
        if (getBookingData?.date && getBookingData?.id) {
            setGoNext(true)
        } else {
            setGoNext(false)
        }
    }, [isLoading])
    return (
        <div>
            <Content className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-gray-800  text-center">Schedule Time</h1>
                <h2 className="text-xl text-semibold mb-5 mt-2">When would you like to take your service ?</h2>
                <p className="mb-3 text-lg text-gray-800 mt-5">Select your prefer date</p>
                <div className="flex justify-center gap-5 ">
                    {
                        reformedSchedule?.map((schedule: any, index: number) => (<div key={index}>
                            <button onClick={() => handleSelectScheduleDate(schedule)} className="flex gap-4 mb-5">
                                <span className={`bg-white p-4 text-2xl w-28 border  rounded
                                ${getBookingData?.date?.date === schedule?.date && "text-white  bg-sky-400"}`}> {formateDate(schedule?.date)}</span>
                            </button>
                        </div>)

                        )
                    }

                </div>
                {schedules && <div className=" my-5">
                    <h3 className="text-lg my-5 text-center text-gray-800">Select your prefer time</h3>

                    <div className="flex flex-wrap mx-auto justify-center gap-10">

                        {
                            schedules?.scheduleTime?.map((scheduleTime: any, index: number) =>
                                <button onClick={() => !scheduleTime?.booking
                                    && handleSelectScheduleTime(scheduleTime)}
                                    key={index}
                                    className={`bg-white p-3 rounded  border 
                                      ${scheduleTime?.booking ? 'text-gray-200' : ''}
                                      ${getBookingData?.id === scheduleTime?.id ? 'text-white bg-sky-400' : ''}
                                      `}
                                >
                                    {formateTime(scheduleTime?.startTime)} <br /><hr />
                                    {formateTime(scheduleTime?.endTime)}
                                </button>

                            )
                        }
                    </div>
                </div>}
            </Content>
        </div>
    )
}
