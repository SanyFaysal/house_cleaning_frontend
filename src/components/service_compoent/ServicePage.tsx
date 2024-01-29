'use client'


import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { useEffect, useState } from "react";

import CategoryServices from "./CategoryServices";
import { useParams, useRouter, useSearchParams } from "next/navigation";


export default function ServicePage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [category, setCategory] = useState<Record<string, any>>()
    const [categoryOpen, setCategoryOpen] = useState<boolean>(false);

    const [query, setQuery] = useState<any>();
    const { data } = useGetAllServiceQuery(query);
    const services = data?.data;
    const highestPrice = data?.highestPrice;
    const lowestPrice = data?.lowestPrice;
    const { data: categoryData }: any = useGetAllCategoriesQuery(undefined);
    const categories = categoryData?.data;


    const handleSetCategory = (category: any) => {
        if (Object.keys(category)?.length) {
            setQuery({ category: category?.title && category?.title })
            setCategory(category)
            router.push(`/service?category=${category?.title}`)
        } else {
            setCategory({})
            setQuery({})
            router.push(`/service`)
        }
    }
    useEffect(() => {
        const searchCategory = searchParams.get('category')
        if (searchCategory) {
            setQuery({ category: searchCategory && searchCategory })
            setCategory({ category: searchCategory })
        }

    }, [])
    return (
        <>
            <div className="">
                <div className="mt-4 h-full grid lg:grid-cols-6">
                    <div className="lg:sticky h-[80vh] border-r flex flex-col gap-5 top-10 col-span-1">
                        <div className="flex justify-between pr-3 items-center">
                            <h4 className="text-xl"> Categories</h4>
                        </div>
                        <div className="grid lg:grid-cols-1 gap-y-2">
                            <div
                                className={`
                                text-semibold 
                                       hover:cursor-pointer 
                                       ${!query?.category ?
                                        'text-blue-400 border-r-2  border-r-blue-600 pr-8' : ''}`} key={category?.id}
                                onClick={() => handleSetCategory({})} >
                                <span>All </span>
                            </div>
                            {categories?.map((category: any) =>
                                <div
                                    className={`
                                text-semibold 
                                       hover:cursor-pointer 
                                       ${query?.category === category?.title ?
                                            'text-blue-400 border-r-2  border-r-blue-600 pr-8' : ''}`} key={category?.id}
                                    onClick={() => handleSetCategory(category)} >
                                    <span>{category?.title}</span>
                                </div>)}


                        </div>

                    </div>
                    <div className=" lg:gap-5    lg:col-span-5">
                        <CategoryServices services={services} category={category} setQuery={setQuery} />
                    </div>
                </div>

            </div>
        </ >
    )
}
