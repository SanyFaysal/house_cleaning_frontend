'use client'

import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import CategoryCard from "../../../CategoryCard";
import { ICategory } from "@/types/data";


export default function TopCategories() {
    const { data }: any = useGetAllCategoriesQuery(undefined);
    return (
        <div className="my-12">
            <h1 className="text-2xl font-semibold mb-5 ">Top Categories</h1>
            <div className="px-2 flex flex-wrap  gap-10">

                {data?.data?.map((category: ICategory) => <CategoryCard category={category} key={category?.id} />)
                }
            </div>
        </div>
    )
}
