import PageLayout from "@/components/layout/PageLayout";
import ServicePage from "@/components/service_compoent/ServicePage";
import { Metadata } from "next";




export const metadata: Metadata = {
    title: 'Services - HomeSync Solution',
    description: 'Generated by create next app',
}


export default function Service() {

    return (
        <PageLayout>
            <ServicePage />
        </PageLayout >
    )
}
