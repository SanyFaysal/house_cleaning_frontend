'use client'

import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import CategoryCard from "../ui/CategoryCard";
import { ICategory } from "@/types/data";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function TopCategories() {
    const { data }: any = useGetAllCategoriesQuery(undefined);

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="my-20"

        >
            <h1 className="text-2xl font-semibold mb-5 ">Top Categories</h1>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="mx-2 "
            >
                <CarouselContent>
                    {data?.data?.map((category: ICategory) =>
                    (<CarouselItem key={category?.id} className="md:basis-1/2 lg:basis-1/6 rounded-lg ">
                        <CategoryCard category={category} />
                    </CarouselItem>))}
                </CarouselContent>
                <CarouselPrevious className=" border-0 text-sky-500" />
                <CarouselNext className=" border-0 text-sky-500" />
            </Carousel>

        </div>
    )
}
