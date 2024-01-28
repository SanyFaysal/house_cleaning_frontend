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
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from "antd";

export default function RecentServices() {

    const { data }: any = useGetAllServiceQuery(undefined);
    const services = data?.data;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div
            className="my-1">


            <h1 className="text-2xl mt-10 font-semibold mb-5">Recent Services</h1>


            <div className="text-xl ">

                {
                    !services?.length && <div className="grid lg:grid-cols-4 gap-5 ">
                        {[1, 1, 1, 1]?.map((item: any) => <div className="flex flex-col">

                            <Skeleton active />
                        </div>)}
                    </div>
                }

                {
                    services?.length && <Carousel
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
                        <CarouselPrevious className=" border-0 text-sky-500" />
                        <CarouselNext className=" border-0 text-sky-500" />
                    </Carousel>
                }

            </div>
        </div>
    )

}
