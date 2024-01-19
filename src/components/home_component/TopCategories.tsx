'use client'

import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import CategoryCard from "../../../CategoryCard";
import { ICategory } from "@/types/data";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function TopCategories() {
    const { data }: any = useGetAllCategoriesQuery(undefined);
    return (
        <div className="my-20">
            <h1 className="text-2xl font-semibold mb-5 ">Top Categories</h1>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="mx-2 "
            >
                <CarouselContent>

                    {data?.data?.map((category: ICategory) => <CarouselItem key={category?.id} className="md:basis-1/2 lg:basis-1/6 rounded-lg ">
                        <CategoryCard category={category} key={category?.id} />
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className=" border-0 text-sky-500" />
                <CarouselNext className=" border-0 text-sky-500" />
            </Carousel>
            {/* <div className="px-2 grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2  gap-3">

                {data?.data?.map((category: ICategory) => <CategoryCard category={category} key={category?.id} />)
                }
            </div> */}
        </div>
    )
}
