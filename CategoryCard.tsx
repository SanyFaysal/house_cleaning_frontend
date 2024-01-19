import { ICategory } from "@/types/data";
import Image from "next/image";

export default function CategoryCard({ category }: { category: ICategory }) {
    return (
        <div className="bg-gray-50 px-3 py-2 rounded-lg text-center">

            <Image src={category?.image} width={100} height={100} alt="Category Image" />
            <p>{category?.title}</p>
        </div>
    )
}
