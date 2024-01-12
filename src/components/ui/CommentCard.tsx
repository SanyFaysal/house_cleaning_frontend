import { formateDateWithYear } from "@/helpers/formate_date_time";
import { Avatar } from "antd";

export default function CommentCard({ comment }: any) {
    return (
        <div className="flex gap-2 items-start">
            <Avatar style={{ backgroundColor: 'orange', verticalAlign: 'small' }} gap={2}>
                {comment?.user?.fullName?.slice(0, 1)}
            </Avatar>
            <div>
                <p className="font-semibold">{comment?.user?.fullName}</p>
                <p className=""> on <span className="font-semibold">{formateDateWithYear(comment?.createdAt)}</span></p>

                <p className="mt-2">{comment?.comment}</p>
                <p className="mt-1"><span className="underline text-blue-500">Reply</span></p>
            </div>
        </div>
    )
}
