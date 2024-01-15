'use client'

import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";


export default function TopCategories() {
    const { data }: any = useGetAllCategoriesQuery(undefined);
    return (
        <div className="my-12">
            <h1 className="text-2xl font-semibold mb-5 ">Top Categories</h1>
            <div className="px-2 flex flex-wrap  gap-10">

                {data?.data?.map((category: any) =>
                    <>
                        {
                            category?.service?.length ? <div className="bg-white px-3 py-2 rounded-lg text-center">
                                <p className="text-lg">{category?.title}</p>

                            </div> : <></>
                        }</>
                )
                }
            </div>
        </div>
    )
}
