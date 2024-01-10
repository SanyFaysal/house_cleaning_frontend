import { authKey } from "@/constants/storageKey";
import { formateDate, formateTime } from "@/helpers/formate_date_time";
import { useUpdateBookingStatusMutation } from "@/redux/api/booking.api";
import { getFromLocalStorage } from "@/utils/local-storage";
import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, message } from "antd";


export default function BookingCard({ booking }: { booking: any }) {
    const token = getFromLocalStorage(authKey);
    const [cancelBooking] = useUpdateBookingStatusMutation()
    const handleCancelBooking = async () => {
        try {
            const data = {
                status: 'CANCELLED'
            }
            if (booking?.status === 'CANCELLED') {
                return message.error('Already cancelled')
            }
            const res: any = await cancelBooking({ id: booking?.id, token, data }).unwrap()
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
                         ${booking?.status === 'CANCELLED' ?
                                'border-red-500 text-red-500'
                                : booking?.status === 'PENDING' ? "" : "border-sky-500 text-sky-500"} `}>{booking?.status}</span>
                    </p>
                    <div>
                        <Dropdown menu={{ items }}
                            trigger={['click']} placement="bottomRight">
                            <MoreOutlined className="text-xl" />
                        </Dropdown>
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

        </div >
    )
}
