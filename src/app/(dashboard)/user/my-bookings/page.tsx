'use client'

import BookingCard from "@/components/ui/BookingCard";
import { authKey } from "@/constants/storageKey"
import { useGetMeQuery } from "@/redux/api/userApi";
import { getFromLocalStorage } from "@/utils/local-storage"

export default function MyBookings() {
    const token = getFromLocalStorage(authKey);
    const { data } = useGetMeQuery(token);
    const user = data?.data
    return (
        <div>
            <h3 className="text-xl mb-3">My Bookings</h3>
            <div className="grid lg:grid-cols-2 gap-4">
                {user?.booking?.map((item: any) => <BookingCard booking={item} key={item?.id} />)}
            </div>
        </div>
    )
}
