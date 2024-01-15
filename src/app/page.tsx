'use client'

import React from 'react';
import ReactDOM from 'react-dom';
import Banner from "@/components/home_component/Banner";
import PageLayout from "@/components/layout/PageLayout";
import Footer from "@/components/shared/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";

import { Card, Layout } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import SwiperSlide from '@/components/shared/SwiperSlide';


export default function Home() {
  const { data }: any = useGetAllServiceQuery(undefined);
  const services = data?.data;

  const settings = {


  };
  return (
    <PageLayout>
      <div>
        <Banner />
        <h1 className="text-2xl mt-20 font-semibold mb-5">Recent Services</h1>
        {/* <div className="grid lg:grid-cols-5 gap-5 mb-10">
          {services?.map((service: IService) => <ServiceCard service={service} key={service?.id} />)}
        </div> */}
      </div>




      <div>

      </div>

      <div className='px-2'>

        <SwiperSlide />
      </div>
    </PageLayout>
  )
}
