'use client'


import { ICategory } from "@/types/data";
import Image from "next/image";

export default function CategoryCard({ category }: { category: ICategory }) {

    return (
        <div className="bg-gray-50 px-3 py-2 rounded-lg text-center ">
            <div className="flex justify-center w-min px-2">
                <Image src={category?.image} width='0' height='0'
                    style={{ width: '80%', height: '90px' }}
                    className="rounded  font-semibold"
                    alt="Category Image" />
            </div>
            <div className="w-[20px] flex justify-center h-11 ">
                <p className="text-center w-full h-full">{category?.title?.split(' ')?.[0]} <br /> {category?.title?.split(' ')?.[1]} {category?.title?.split(' ')?.[2]}</p>
            </div>
        </div>
    )
}
