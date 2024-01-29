'use client'
import PageLayout from "@/components/layout/PageLayout";
import CartService from "@/components/ui/CartService";
import { authKey } from "@/constants/storageKey";
import { useGetCartQuery } from "@/redux/api/cart.api";
import { IService } from "@/types/data";
import { getFromLocalStorage } from "@/utils/local-storage";

export default function page() {
    const token = getFromLocalStorage(authKey)
    const { data }: any = useGetCartQuery(token)
    return (
        <div className="min-h-[75vh] ">
            <div className=" mt-3 flex justify-between">
                <h1 className="text-2xl">Cart</h1>
                <p>Total {data?.data?.length}</p>
            </div>
            <div className="grid grid-cols-9 gap-5 p-4 text-md bg-gray-100">
                <div className="col-span-1 ">
                    Image
                </div>

                <h3 className="text- col-span-3 ">Service Name</h3>
                <h3 className="col-span-1 ">Service Status</h3>
                <h3 className="col-span-1 ">Added to cart</h3>
                <h3 className="col-span-1 ">Service Price</h3>
                <h3 className="col-span-2 text-end">Actions</h3>
            </div>
            <div className="mb-10 flex flex-col gap-4 w-full mt-1">
                {data?.data && data?.data?.map((cart: any) => <CartService cart={cart} key={cart?.id} />)}
            </div>
        </div>
    )
}
