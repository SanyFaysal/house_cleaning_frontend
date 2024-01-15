import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function AllCategories() {
    const { data } = useGetAllCategoriesQuery(undefined);
    return (
        <div className="my-12">
            <h1 className="text-2xl font-semibold mb-5">Top Categories</h1>
            <div className="px-2 grid grid-cols-5 gap-5">

                {data?.data?.map((category: any) =>
                    <>
                        {
                            category?.service?.length ? <div className="bg-slate-50 px-3 py-2 rounded-lg text-center">
                                <p>{category?.title}</p>

                            </div> : <></>
                        }</>
                )
                }
            </div>
        </div>
    )
}
