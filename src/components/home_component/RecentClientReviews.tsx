'use client'

import { useGetAllReviewsQuery } from "@/redux/api/reveiw.api"
import ReviewCard from "../ui/ReviewCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from "react";

export default function RecentClientReviews() {
    const { data }: any = useGetAllReviewsQuery(undefined);
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="my-10"

        >
            <h1 className="text-2xl  font-semibold mb-5">Recent Client Reviews</h1>
            <div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mx-2 "
                >
                    <CarouselContent className="grid lg:grid-cols-3 gap-5">
                        {data?.data?.map((review: any) => <CarouselItem key={review?.id} className="md:basis-1/2 lg:basis-1/3 rounded-lg bg-gray-50 p-3 ">
                            <ReviewCard review={review} key={review?.id} />
                        </CarouselItem>)}
                    </CarouselContent>
                    <CarouselPrevious className="border-0 text-sky-500" >Prev</CarouselPrevious>
                    <CarouselNext className="border-0 text-sky-500" />
                </Carousel>
            </div>
        </div>


    )
}
