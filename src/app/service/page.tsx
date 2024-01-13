'use client'

import PageLayout from "@/components/layout/PageLayout";
import CategoryServices from "@/components/shared/CategoryServices";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { useEffect, useState } from "react";


export default function ServiceDetails() {

    const { data } = useGetAllServiceQuery(undefined);

    const { data: categoryData } = useGetAllCategoriesQuery(undefined);
    const categories = categoryData?.data;
    const [category, setCategory] = useState<Record<string, any>>();


    return (
        <PageLayout>
            <div className="relative">
                <h3 className="text-3xl">All Service</h3>
                <div className=" min-h-[71vh] grid grid-cols-6  mt-4">
                    <div className="sticky top-10 flex flex-col gap-5   col-span-1 mt-5 pr-8 border-r">
                        {categories?.map((category: any) => <p
                            className="text-semibold hover:translate-x-1 hover:text-blue-500
                     hover:duration-300 hover:cursor-pointer" key={category?.id}
                            onClick={() => setCategory(category)}>{category?.title}</p>)}
                    </div>
                    <div className="col-span-5 gap-5  ">
                        <CategoryServices category={category} />
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
