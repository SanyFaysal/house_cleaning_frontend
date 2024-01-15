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

import RecentServices from '@/components/home_component/RecentServices';
import AllCategories from '@/components/home_component/AllCategories';
import WhyChooseUs from '@/components/home_component/WhyChooseUs';


export default function Home() {
  const { data }: any = useGetAllServiceQuery(undefined);
  const services = data?.data;

  return (
    <PageLayout>
      <Banner />
      <RecentServices />
      <AllCategories />
      <WhyChooseUs />
    </PageLayout>
  )
}
