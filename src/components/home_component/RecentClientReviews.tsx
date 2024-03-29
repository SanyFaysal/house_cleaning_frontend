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

import { Skeleton } from "antd";

export default function RecentClientReviews() {
    const { data }: any = useGetAllReviewsQuery(undefined);


    return (
        <div className="my-10"

        >
            <h1 className="text-2xl  font-semibold mb-5">Recent Client Reviews</h1>
            <div>



                {data?.data?.length && <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mx-2 "
                >
                    <CarouselContent className="">
                        {data?.data?.map((review: any) => <CarouselItem key={review?.id} className="md:basis-1/2 lg:basis-1/3 rounded-lg bg-gray-50 p-3 mr-3 ">
                            <ReviewCard review={review} key={review?.id} />
                        </CarouselItem>)}
                    </CarouselContent>
                    <CarouselPrevious className="border-0 text-sky-500" >Prev</CarouselPrevious>
                    <CarouselNext className="border-0 text-sky-500" />
                </Carousel>}
            </div>
        </div>


    )
}
