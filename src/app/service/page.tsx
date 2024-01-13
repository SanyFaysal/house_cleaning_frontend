'use client'

import PageLayout from "@/components/layout/PageLayout";
import CategoryServices from "@/components/shared/CategoryServices";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { useEffect, useState } from "react";


export default function ServiceDetails() {
    const [category, setCategory] = useState<Record<string, any>>()
    const [query, setQuery] = useState<any>();
    const { data } = useGetAllServiceQuery(query);
    const services = data?.data;
    const { data: categoryData } = useGetAllCategoriesQuery(undefined);
    const categories = categoryData?.data;

    console.log(category)
    const handleSetCategory = (category: any) => {
        if (Object.keys(category)?.length) {
            console.log({ come: true })
            setQuery({ category: category?.title && category?.title })
            setCategory(category)
        } else {
            setCategory({})
            setQuery({})
        }
    }
    return (
        <PageLayout>
            <div className="">

                <div className="mt-4 h-full grid grid-cols-6">
                    <div className="sticky h-[80vh] border-r flex flex-col gap-5 top-10 col-span-1">
                        <h3 className="text-3xl ">All Service</h3>

                        <div
                            className={`
                                text-semibold 
                                       hover:cursor-pointer 
                                       ${!query?.category ?
                                    'text-blue-400 border-r-2 font-semibold border-r-blue-500 pr-8' : ''}`} key={category?.id}
                            onClick={() => handleSetCategory({})} >
                            <span>All </span>
                        </div>
                        {categories?.map((category: any) =>
                            <div
                                className={`
                                text-semibold 
                                       hover:cursor-pointer 
                                       ${query?.category === category?.title ?
                                        'text-blue-400 border-r-2 font-semibold border-r-blue-500 pr-8' : ''}`} key={category?.id}
                                onClick={() => handleSetCategory(category)} >
                                <span>{category?.title}</span>
                            </div>)}
                    </div>
                    <div className=" gap-5    col-span-5">
                        <CategoryServices services={services} category={category} setQuery={setQuery} />
                    </div>
                </div>

            </div>
        </PageLayout >
    )
}
