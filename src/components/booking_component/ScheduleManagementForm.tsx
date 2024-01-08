'use client'
'use client'
import { scheduleReformed } from "@/helpers/schedule_reformed_array";
import { formateDate, formateTime } from "@/helpers/formate_date_time";
import { IService } from "@/types/data";
import { DatePicker, Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

export default function ScheduleManagementForm({
    service, selectSchedule, setSelectSchedule }
    : { service: IService, selectSchedule: any, setSelectSchedule: any }) {
    const [schedules, setSchedules] = useState<any>();
    const reformedSchedule = scheduleReformed(service);

    return (
        <div>
            <Content className="flex flex-col items-center">
                <h1 className="text-xl mb-6 text-center">Select a Date  schedule</h1>

                <div className="flex justify-center gap-5">
                    {
                        reformedSchedule?.map((schedule: any, index: number) => (<div key={index}>
                            <button onClick={() => setSchedules(schedule)} className="flex gap-4 mb-5">
                                <span className={`bg-white p-4 border  rounded ${schedules?.date === schedule?.date && "bg-sky-500 text-white"}`}> {formateDate(schedule?.date)}</span>
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
                                    && setSelectSchedule(scheduleTime)}
                                    key={index}
                                    className={`bg-white p-4 rounded
                                      ${scheduleTime?.booking ? 'text-gray-200' : ''}
                                      ${selectSchedule?.id === scheduleTime?.id ? 'text-white bg-sky-500' : ''}
                                      
                                      
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
