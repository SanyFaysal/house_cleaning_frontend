import { authKey } from "@/constants/storageKey";
import { formateDateWithYear } from "@/helpers/formate_date_time";
import { useDeleteCartServiceMutation } from "@/redux/api/cart.api";
import { getFromLocalStorage } from "@/utils/local-storage";
import { message } from "antd";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";


export default function CartService({ cart }: { cart: any }) {
    const router = useRouter()
    const token = getFromLocalStorage(authKey)
    const [deleteCartService] = useDeleteCartServiceMutation();
    const handleRemoveCartService = async (id: string) => {
        try {

            const res: any = await deleteCartService({ id, token }).unwrap();
            if (res.status) {
                message.success(res?.message)
            }
        } catch (error: any) {
            console.log({ error })
            message.error(error?.data?.message)
        }

    }
    return (
        <div className="grid grid-cols-9 gap-5  p-4 bg-gray-50">
            <div className="col-span-1 ">
                <Image src={cart?.service?.image ? cart?.service?.image : ''} height={100} width={100} alt="service image" className="rounded" />
            </div>

            <h3 className="text-lg col-span-3 ">{cart?.service?.serviceName}</h3>
            <h3 className="col-span-1 capitalize">{cart?.service?.status.toLowerCase()}</h3>
            <h3 className="col-span-1 ">{formateDateWithYear(cart?.createdAt)}</h3>
            <h3 className="col-span-1 ">{cart?.service?.price}</h3>
            <div className="col-span-2 flex gap-3 justify-end">
                <button onClick={() => router.push(`/booking/${cart?.service?.id}`)} className="bg-sky-500 text-white h-fit px-3 py-2 rounded">Add Booking</button>
                <button onClick={() => handleRemoveCartService(cart?.id)} className="bg-red-500 text-white h-fit px-3 py-3 rounded"><RxCross1 />
                </button>

            </div>
        </div>
    )
}
