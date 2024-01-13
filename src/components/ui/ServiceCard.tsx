'use client'

import { IService } from "@/types/data";
import { useRouter } from "next/navigation";

export default function ServiceCard({ service }: { service: IService }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`service/service-details/${service?.id}`)} className="hover:shadow-lg duration-200 hover:scale-105 cursor-pointer rounded-lg">
            <img src={service?.image} className="rounded-t-lg h-[25vh] border-0 w-full" alt="" />
            <div className="px-2 py-3 mb-4">
                <h5 className="text-xl h-[8vh] font-semibold tracking-tight  text-gray-900 dark:text-white">
                    {service?.serviceName}
                </h5>
                {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                </p> */}
                {/* <button  className="flex gap-2 items-center border px-4 py-2 rounded-lg">
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button> */}
            </div>
        </div>
    )
}
