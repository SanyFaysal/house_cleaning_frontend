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

export default function RecentServices() {

    const { data }: any = useGetAllServiceQuery(undefined);
    const services = data?.data;

    return (
        <div>


            <h1 className="text-2xl mt-20 font-semibold mb-5">Recent Services</h1>


            <div className="text-xl ">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mx-2 "
                >
                    <CarouselContent>

                        {services?.map((service: IService) => <CarouselItem key={service?.id} className="md:basis-1/2 lg:basis-1/4 rounded-lg ">

                            <ServiceCard service={service} key={service?.id} />
                        </CarouselItem>)}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white text-black" />
                    <CarouselNext className="bg-white text-black" />
                </Carousel>
            </div>
        </div>
    )

}
