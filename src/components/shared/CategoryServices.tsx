import { IService } from "@/types/data";
import ServiceCard from "../ui/ServiceCard";
import { Input } from "antd";

export default function CategoryServices({ services, category }: any) {
    return (
        <div className="px-5">
            <div className="flex justify-between mb-4 items-center">
                <div>
                    <h3 className="text-2xl font-semibold">{category?.title ?? 'All'}</h3>
                    <h3 className="text-lg mb-3"> Total Found : {services?.length}</h3>
                </div>
                <div>
                    <input type="text" className="px-3 py-2  border-b focus-border-0" />
                    <button className="px-3 py-2 border rounded">Search</button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-8">

                {
                    services?.map((service: IService) => <ServiceCard service={service} key={service?.id} />)
                }
            </div>
        </div>
    )
}
