


import Banner from "@/components/home_component/Banner";
import PageLayout from "@/components/layout/PageLayout";


import RecentServices from '@/components/home_component/RecentServices';
import WhyChooseUs from '@/components/home_component/WhyChooseUs';
import TopCategories from '@/components/home_component/TopCategories';
import RecentClientReviews from "@/components/home_component/RecentClientReviews";
import TotalCalculation from "@/components/home_component/TotalCalculation";


export default function Home() {


  return (
    <PageLayout>
      <Banner />
      <RecentServices />
      <TopCategories />
      <RecentClientReviews />
      <TotalCalculation />
      <WhyChooseUs />
    </PageLayout>
  )
}
