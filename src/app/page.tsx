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
      <div>
        <h1 className="text-5xl mb-4">Recent Services</h1>
        <div className="grid lg:grid-cols-5 gap-5 mb-10">
          {services?.map((service: IService) => <ServiceCard service={service} key={service?.id} />)}
        </div>
      </div>
    </PageLayout>
  )
}
