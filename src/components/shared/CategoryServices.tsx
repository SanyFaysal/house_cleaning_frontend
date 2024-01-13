import { IService } from "@/types/data";
import ServiceCard from "../ui/ServiceCard";

export default function CategoryServices({ category }: { category: any }) {
    return (
        <div className="px-5">
            <h3 className="text-2xl font-semibold">{category?.title}</h3>
            <h3 className="text-lg mb-3"> Total Found : {category?.service?.length}</h3>
            <div className="grid grid-cols-4 gap-5">

                {
                    category?.service?.map((service: IService) => <ServiceCard service={service} key={service?.id} />)
                }
            </div>
        </div>
    )
}
