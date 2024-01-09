import { formateDate, formateTime } from "@/helpers/formate_date_time";
import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";


export default function BookingCard({ booking }: { booking: any }) {
    return (
        <div className=" p-4 rounded-lg bg-white">
            <div className="flex justify-between">

                <div>
                    <span className="text-2xl">{formateDate(booking?.schedule?.date)}</span> at   <div className="flex gap-2 items-center w-fit   mb-2  rounded-lg ">
                        <span className="font-semibold ">{formateTime(booking?.schedule?.startTime)}</span>
                        To
                        <span className="  font-semibold">{formateTime(booking?.schedule?.endTime)} </span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p>  <span className="border border-orange-500 text-orange-500 rounded-full px-4">{booking?.status}</span></p>
                    <div>
                        <MoreOutlined className="text-xl" />
                    </div>
                </div>
            </div>

            <div>
                <p className="font-semibold text-lg">Service </p>
                <p>
                    {booking?.service?.serviceName}

                </p>
            </div>
            <div>
                <h1 className="font-semibold text-lg">User Contact</h1>
                <div className="flex gap-5">
                    <div>
                        <h1 className="font-semibold">Name</h1>
                        <h1>{booking?.fullName}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold">Email</h1>
                        <h1>{booking?.email}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold">Phone Number</h1>
                        <h1>{booking?.phoneNumber}</h1>
                    </div>

                </div>
            </div>
            <div>
                <h1 className="font-semibold text-lg">Address</h1>
                <div className="flex gap-5">
                    <div>
                        <h1 className="font-semibold">Area</h1>
                        <h1>{booking?.area}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold">Sector No.</h1>
                        <h1>{booking?.sectorNo}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold">Road No.</h1>
                        <h1>{booking?.roadNo}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold">Block No.</h1>
                        <h1>{booking?.blockNo}</h1>
                    </div>

                </div>
            </div>
            <p className="mt-2 text-lg">
                TK:   {booking?.service?.price} </p>

        </div>
    )
}
