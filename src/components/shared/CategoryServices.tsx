import { IService } from "@/types/data";
import ServiceCard from "../ui/ServiceCard";

export default function CategoryServices({ services, category, setQuery }: any) {

    const handleSearchTerm = (e: any) => {
        e.preventDefault();

        setQuery((prev: any) => ({ ...prev, searchTerm: e.target.searchTerm.value }))

    }

    return (
        <div className="px-5">
            <div className="flex justify-between mb-4 items-center">
                <div>
                    <h3 className="text-2xl font-semibold">{category?.title ?? 'All'}</h3>
                    <h3 className="text-lg mb-3"> Total Found : {services?.length}</h3>
                </div>
                <form onSubmit={handleSearchTerm}>
                    <input type="text" required name="searchTerm" placeholder="Search any service " className="px-3 py-2  border-b focus:outline-none" />
                    <button type="submit" className="px-3  py-2 border rounded ">Search</button>
                </form>
            </div>
            <div className="grid grid-cols-4 gap-8">

                {
                    services?.map((service: IService) => <ServiceCard service={service} key={service?.id} />)
                }
            </div>
        </div>
    )
}
