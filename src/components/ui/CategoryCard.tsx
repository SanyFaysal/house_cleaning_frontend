'use client'


import { ICategory } from "@/types/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function CategoryCard({ category }: { category: ICategory }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/service?category=${category?.title}`)} className="bg-gray-50 px-3 py-2 rounded-lg text-center cursor-pointer ">
            <div className="flex justify-center  px-2">
                {/* <Image src={'http://res.cloudinary.com/dfcztmnvh/image/upload/v1705694272/orbkrp9z0ufm7jxspczy.jpg'} width={100} height={100}
                    style={{ width: '80%', height: '90px' }}
                     className="rounded  font-semibold"
                    alt="Category Image" /> */}
                <img src={category.image} className="w-[100px] h-[80px]" alt="" />
            </div>
            <div className=" flex justify-center text-center h-11 ">
                <p className="text-center w-full h-full">{category?.title?.split(' ')?.[0]} <br /> {category?.title?.split(' ')?.[1]} {category?.title?.split(' ')?.[2]}</p>
            </div>
        </div>
    )
}
