import { formateDate, formateTime } from "@/helpers/formate_date_time";
import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";


export default function BookingCard({ booking }: { booking: any }) {
    return (
        <div className="border p-3 rounded-lg">
            <div className="flex justify-between">

                <span className="text-lg">{formateDate(booking?.schedule?.date)}</span>


                <div className="flex gap-2">
                    <p>  <span className="border border-orange-500 text-orange-500 rounded-full px-4">{booking?.status}</span></p>
                    <div>
                        <MoreOutlined className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center w-fit   mb-2  rounded-lg ">
                <span className="font-semibold ">{formateTime(booking?.schedule?.startTime)}</span>
                To
                <span className="  font-semibold">{formateTime(booking?.schedule?.endTime)} </span>
            </div>
            <p>
                {booking?.service?.serviceName}

            </p>
            <p className="mt-2">
                TK:   {booking?.service?.price} </p>

        </div>
    )
}
