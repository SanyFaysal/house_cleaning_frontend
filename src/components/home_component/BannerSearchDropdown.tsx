import { IService } from "@/types/data";
import { useRouter } from "next/navigation";

export default function BannerSearchDropdown({ services }: { services: IService[] }) {
  const limitService = services?.length > 4 ? services?.slice(0, 4) : services
  const router = useRouter()
  return (
    <div className="absolute border-[2px]  bg-gray-100 top-1 rounded-lg w-full z-[9]">
      <div className="p-4 rounded-lg">
        <h1>Search Result</h1>
        <div className="flex flex-col gap-3 overflow-y-auto min-h-[50px] ">
          {services?.length ?
            limitService?.map((service: IService, index: any) => <div key={index} className="flex justify-between mr-5">
              <div className="flex  gap-2">
                <img src={service?.image} className="w-10 h-10 rounded-lg" />
                <div>
                  <p className="font-semibold text-sm">{service?.serviceName}</p>
                  <p className="text-xs">{service?.category?.title}</p>
                </div>
              </div>
              <div>
                <button onClick={() => router.push(`/service/service-details/${service?.id}`)} className=" px-3 py-1 ">See full</button>
              </div>

            </div>)
            : <div>
              <p>No service found</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
