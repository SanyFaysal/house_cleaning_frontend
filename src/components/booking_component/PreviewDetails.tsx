'use client'

import { formateDate, formateTime } from "@/helpers/formate_date_time"
import { getFromLocalStorage } from "@/utils/local-storage"
import { HomeFilled, HomeOutlined, UserOutlined } from "@ant-design/icons"

import {
    SlCalender
} from "react-icons/sl"

export default function PreviewDetails() {

    const getBookingData: any = getFromLocalStorage('bookingData')?.length ? JSON.parse(getFromLocalStorage('bookingData') as string) : {};



    return (
        <div className="flex flex-col">
            <div className=" w-fit   p-5">
                <div className="flex gap-2 items-center ">
                    <SlCalender className='text-xl text-slate-00 ' />
                    <h1 className="text-xl font-semibold">Schedule</h1>
                </div>
                <div className="w-fit">
                    <div className="flex gap-x-3 items-end  ml-7 text-lg font-[400]">

                        <p className="text-2xl ">{formateDate(getBookingData?.date?.date)}</p>

                        <p className=" ">( {getBookingData?.date?.scheduleTime?.map((item: any) => item?.id === getBookingData?.id && <span>
                            {formateTime(item?.startTime)} - {formateTime(item?.endTime)}
                        </span>)} )</p>
                    </div>
                </div>
            </div>
            <div className="w-fit   p-5">
                <div className="flex gap-2 items-center ">
                    <UserOutlined className='text-xl text-slate-00 ' />
                    <h1 className="text-xl font-semibold">User Contact </h1>
                </div>

                <div className="flex gap-x-5   ml-7 text-lg font-[400]">
                    <p className="border-r ">{getBookingData.user?.fullName}</p>
                    <p className="border-r ">{getBookingData.user?.email}</p>
                    <p className="border-r ">{getBookingData.user?.phoneNumber}</p><br />
                </div>

                {
                    getBookingData?.user?.additionalNotes && <div className="ml-7">
                        <h2 className="font-semibold">Additional Info</h2>
                        <p>{getBookingData.user?.additionalNotes}</p>
                    </div>
                }

            </div>
            <div className=" w-fit   p-5">
                <div className="flex gap-2 items-start ">
                    <HomeOutlined className='text-xl text-slate-00 ' />
                    <h1 className="text-xl font-semibold">Address  </h1>
                </div>

                <div className="flex gap-x-5   ml-7 text-lg font-[400]">
                    <p className="border-r "><span className="font-semibold">Area</span> : {getBookingData.address?.area}</p>
                    <p className="border-r "><span className="font-semibold">Road no</span>: {getBookingData.address?.roadNo}</p>
                    <p className="border-r "><span className="font-semibold">Block no</span>: {getBookingData.address?.blockNo}</p>
                    <p className="border-r "><span className="font-semibold">Sector no</span>: {getBookingData.address?.sectorNo}</p>
                    <p className="border-r "><span className="font-semibold">House no</span>: {getBookingData.address?.houseNo}</p>
                </div>

            </div>

        </div>
    )
}
