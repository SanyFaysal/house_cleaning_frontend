'use client'

import PageLayout from "@/components/layout/PageLayout";
import Footer from "@/components/shared/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { IService } from "@/types/data";
import { Card, Layout } from "antd";


export default function Home() {
  const { data } = useGetAllServiceQuery(undefined);
  const services = data?.data;
  return (
    <PageLayout>
      <>
        <h1 className="text-xl mb-4">Recent Services</h1>
        <div className="grid grid-cols-3 gap-4">
          {services?.map((service: IService) => <ServiceCard service={service} key={service?.id} />)}
        </div>
      </>
    </PageLayout>
  )
}
