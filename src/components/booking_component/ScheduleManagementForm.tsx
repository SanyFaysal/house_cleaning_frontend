'use client'

import { formateTime } from "@/helpers/time_date/formate_date_time";
import { IService } from "@/types/data";
import { DatePicker, Input } from "antd";
import { Content } from "antd/es/layout/layout";

export default function ScheduleManagementForm({ service }: { service: IService }) {
    console.log({ service })
    return (
        <div>
            <Content className="flex flex-col items-center">
                <h1 className="text-xl mb-6 text-center">Select a Date and Choose your schedule</h1>
                <DatePicker className="lg:w-1/3 mx-auto" />
                <div className="flex flex-wrap mx-auto justify-center gap-x-10 ">
                    {service?.schedule?.map((schedule: any) => <p>{formateTime(schedule?.startTime)}</p>)}
                    {/* <p>2.30-3.20</p> */}
                </div>
            </Content>
        </div>
    )
}
