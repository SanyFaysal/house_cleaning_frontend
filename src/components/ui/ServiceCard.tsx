'use client'

import { authKey } from "@/constants/storageKey";
import { useAddToCartMutation } from "@/redux/api/cart.api";
import { IService } from "@/types/data";
import { getFromLocalStorage } from "@/utils/local-storage";
import { EyeOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import { MdOutlineAddShoppingCart, MdOutlineCategory } from "react-icons/md";

export default function ServiceCard({ service }: { service: IService }) {
    const token = getFromLocalStorage(authKey);
    const router = useRouter();

    const [addToCart] = useAddToCartMutation();

    const handleAddToCart = async (id: string) => {
        try {
            const data = {
                serviceId: id
            }
            const res: any = await addToCart({ data, token }).unwrap();
            if (res.status) {
                message.success(res?.message)
            }
        } catch (error: any) {
            console.log({ error })
            message.error(error?.data?.message)
        }

    }

    return (
        <div className=" hover:shadow-lg duration-200   rounded-lg bg-gray-50">
            <img src={service?.image} className="rounded-t-lg h-[25vh]  border-0 w-full" alt="" />
            <div className=" py-3  px-3 text-gray-900">
                <h5 className="text-lg font-medium tracking-tight    dark:text-white">
                    {service?.serviceName?.length > 25 ? `${service?.serviceName?.slice(0, 25)}.` : service?.serviceName}
                </h5>

                <p className="text-sm  w-fit rounded-full mb-2">
                    <MdOutlineCategory className='inline text-lg text-gray-500 mb-1 mr-1' />
                    {service?.category?.title}
                </p>

                <div className="flex  justify-between items-center  ">
                    <p className="text-sm text-start">BDT {service?.price}</p>
                    <div className="flex gap-2">
                        <button onClick={() => handleAddToCart(service.id as string)} className="text-orange-500 hover:text-white bg-orange-100 duration-300 hover:bg-orange-500 px-2 py-1 rounded text-sm" >
                            <MdOutlineAddShoppingCart className='text-lg' />
                        </button>
                        <button className="text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-500 duration-300 px-2 py-1 rounded text-sm" onClick={() => router.push(`service/service-details/${service?.id}`)}>
                            Details
                        </button>

                    </div>
                </div>
            </div>
        </div >
    )
}
