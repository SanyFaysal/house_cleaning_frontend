'use client'

import { useGetAllReviewsQuery } from "@/redux/api/reveiw.api"
import ReviewCard from "../ui/ReviewCard";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function RecentClientReviews() {
    const { data }: any = useGetAllReviewsQuery(undefined);

    return (
        <div>
            <h1 className="text-2xl mt-20 font-semibold mb-5">Recent Client Reviews</h1>
            <div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mx-2 "
                >
                    <CarouselContent className="grid grid-cols-3 gap-5">
                        {data?.data?.map((review: any) => <CarouselItem key={review?.id} className="md:basis-1/2 lg:basis-1/3 rounded-lg bg-gray-50 p-3 ">
                            <ReviewCard review={review} key={review?.id} />
                        </CarouselItem>)}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white text-black" />
                    <CarouselNext className="bg-white text-black" />
                </Carousel>
            </div>
        </div>


    )
}
