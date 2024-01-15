
'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { IService } from "@/types/data";
import ServiceCard from "../ui/ServiceCard";

export default function SwiperSlide() {
    const { data }: any = useGetAllServiceQuery(undefined);
    const services = data?.data;

    return (
        <div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>

                    {services?.map((service: IService) => <CarouselItem key={service?.id} className="md:basis-1/2 lg:basis-1/4 rounded-lg">
                        <div>
                            <ServiceCard service={service} key={service?.id} />
                        </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="bg-blue-500 text-white" />
                <CarouselNext className="bg-blue-500 text-white" />
            </Carousel>
        </div>
    )
}
