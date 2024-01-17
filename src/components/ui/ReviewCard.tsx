import { formateDateWithYear } from "@/helpers/formate_date_time";
import { Rate } from "antd";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function ReviewCard({ review }: { review: any }) {
    return (
        <div className="flex gap-3 ">
            <p className="bg-gray-100 text-gray-500 h-fit p-3 rounded-full">
                <BiSolidQuoteAltLeft className="text-2xl   " />
            </p>

            <div>
                <h3 className="font-medium text-lg">{review?.user?.fullName}  </h3>
                <Rate className="" allowHalf disabled value={review?.ratings} />

                <p className='text-gray-600 mb-3'>Taken on <span className="font-semibold text-black">{formateDateWithYear(review?.createdAt)}</span> </p>
                <p>{review?.review}</p>
            </div>
        </div>
    )
}
