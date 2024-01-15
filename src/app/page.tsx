
import React from 'react';

import Banner from "@/components/home_component/Banner";
import PageLayout from "@/components/layout/PageLayout";


import RecentServices from '@/components/home_component/RecentServices';
import WhyChooseUs from '@/components/home_component/WhyChooseUs';
import TopCategories from '@/components/home_component/TopCategories';


export default function Home() {


  return (
    <PageLayout>
      <Banner />
      <RecentServices />
      <TopCategories />
      <WhyChooseUs />
    </PageLayout>
  )
}
