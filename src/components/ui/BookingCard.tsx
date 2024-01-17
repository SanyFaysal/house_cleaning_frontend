import { authKey } from "@/constants/storageKey";
import { formateDate, formateTime } from "@/helpers/formate_date_time";
import { useCancelBookingMutation } from "@/redux/api/booking.api";
import { getFromLocalStorage } from "@/utils/local-storage";
import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, message } from "antd";
import { useState } from "react";

export default function BookingCard({ booking }: { booking: any }) {
    const token = getFromLocalStorage(authKey);

    const [cancelBooking] = useCancelBookingMutation()
    const handleCancelBooking = async () => {
        try {
            const res: any = await cancelBooking({ id: booking?.id, token }).unwrap()
            if (res.status) {
                message.success(res.message)
            }
        } catch (error: any) {
            const errorMessage: any = error?.data?.message
            message.error(errorMessage)
        }
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <p onClick={handleCancelBooking}>
                    Cancel Booking
                </p>
            ),
        },

    ];
    return (
        <div className={`p-4 rounded-lg bg-white
        
      
        `}>
            <div className="flex justify-between">

                <div>
                    <span className="text-2xl">{formateDate(booking?.schedule?.date)}</span> at   <div className="flex gap-2 items-center w-fit   mb-2  rounded-lg ">
                        <span className="font-semibold ">{formateTime(booking?.schedule?.startTime)}</span>
                        To
                        <span className="  font-semibold">{formateTime(booking?.schedule?.endTime)} </span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p>
                        <span className={`border   rounded-full px-2
                         ${booking?.status === 'PENDING' ?
                                'border-yellow-500 text-yellow-500'
                                : booking?.status === 'CONFIRMED' ? "border-sky-400 text-sky-400" : "border-green-500 text-green-500"} `}>{booking?.status}</span>
                    </p>
                    {booking?.status === 'PENDING' && <div>
                        <Dropdown menu={{ items }}
                            trigger={['click']} placement="bottomRight">
                            <MoreOutlined className="text-xl" />
                        </Dropdown>
                    </div>}
                </div>
            </div>

            <div>
                <p className="font-semibold text-lg">Service </p>
                <p>
                    {booking?.service?.serviceName}

                </p>
            </div>

            <div className="flex justify-between mt-2 items-center">
                <p className=" text-lg">
                    TK:   {booking?.service?.price} </p>

            </div>

        </div >
    )
}
