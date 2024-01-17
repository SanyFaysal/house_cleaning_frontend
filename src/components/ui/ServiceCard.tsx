'use client'

import { IService } from "@/types/data";
import { useRouter } from "next/navigation";

export default function ServiceCard({ service }: { service: IService }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`service/service-details/${service?.id}`)} className=" hover:shadow-lg duration-200  cursor-pointer rounded-lg bg-gray-50">
            <img src={service?.image} className="rounded-t-lg h-[25vh]  border-0 w-full" alt="" />
            <div className="px-2 py-3 mb-4">
                <h5 className="text-lg font-medium tracking-tight  pl-2 text-gray-900 dark:text-white">
                    {service?.serviceName?.length > 25 ? `${service?.serviceName?.slice(0, 25)}.` : service?.serviceName}
                </h5>

            </div>
        </div>
    )
}
