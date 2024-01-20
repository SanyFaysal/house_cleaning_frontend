'use client'

import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import CategoryCard from "../ui/CategoryCard";
import { ICategory } from "@/types/data";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
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
                        {/* <CategoryCard category={category} key={category?.id} /> */}
                        <div className="bg-gray-50 px-3 py-2 rounded-lg text-center ">
                            <div className="flex justify-center w-min px-2">
                                <Image src={category?.image} width='0' height='0'
                                    style={{ width: '80%', height: '90px' }}
                                    className="rounded  font-semibold"
                                    alt="Category Image" />
                            </div>
                            <div className="w-[20px] flex justify-center h-11 ">
                                <p className="text-center w-full h-full">{category?.title?.split(' ')?.[0]} <br /> {category?.title?.split(' ')?.[1]} {category?.title?.split(' ')?.[2]}</p>
                            </div>
                        </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className=" border-0 text-sky-500" />
                <CarouselNext className=" border-0 text-sky-500" />
            </Carousel>

        </div>
    )
}
