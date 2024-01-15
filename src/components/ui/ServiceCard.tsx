'use client'

import { IService } from "@/types/data";
import { useRouter } from "next/navigation";

export default function ServiceCard({ service }: { service: IService }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`service/service-details/${service?.id}`)} className="hover:shadow-lg duration-200  cursor-pointer rounded-lg">
            <img src={service?.image} className="rounded-t-lg h-[25vh]  border-0 w-full" alt="" />
            <div className="px-2 py-3 mb-4">
                <h5 className="text-xl h-[8vh] font-medium tracking-tight  text-gray-900 dark:text-white">
                    {service?.serviceName}
                </h5>

            </div>
        </div>
    )
}
