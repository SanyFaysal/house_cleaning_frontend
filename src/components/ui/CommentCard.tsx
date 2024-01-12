import { formateDateWithYear } from "@/helpers/formate_date_time";
import { Avatar, message } from "antd";
import { useState } from "react";
import ReplyCard from "./ReplyCard";
import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import { useMakeReplyMutation } from "@/redux/api/serviceApi";
import { useAppSelector } from "@/redux/hook";

export default function CommentCard({ comment }: any) {
    const { user } = useAppSelector(state => state.auth);
    const token = getFromLocalStorage(authKey);
    const [reply, setReply] = useState<string>()
    const [openReplyInput, setOpenReplyInput] = useState<boolean>();



    const [makeReply] = useMakeReplyMutation();

    const handleMakeReply = async (commentId: string) => {
        try {
            if (!reply) {
                return message.error('Please write your reply')
            }
            const data = {
                commentId,
                userId: user?.id,
                reply
            };

            const res = await makeReply({ token, data }).unwrap()
            if (res.status) {
                setReply('')
            }
        } catch (error) {
            console.log(error)
            message.error('Something went wrong ')
        }

    }
    return (
        <div className="flex gap-2 items-start">
            <Avatar style={{ backgroundColor: '#201d1d', color: 'white', verticalAlign: 'small' }} gap={2}
                className="bg-[#201d1d]"
            >
                {comment?.user?.fullName?.slice(0, 1)}
            </Avatar>
            <div>
                <p className="font-semibold">{comment?.user?.fullName}</p>
                <p className=""> on <span className="font-semibold">{formateDateWithYear(comment?.createdAt)}</span></p>
                <p className="mt-2">{comment?.comment}</p>
                {openReplyInput && <div className="mt-2 flex gap-2">
                    <input value={reply} onChange={(e) => setReply(e.target.value)} className="border rounded px-2 py-1 w-full" /> <button onClick={() => handleMakeReply(comment.id)} className="px-2 py-1 border bg-blue-500 text-white rounded">Reply</button>
                </div>}
                <p className="mt-1">
                    <span onClick={() =>
                        setOpenReplyInput(!openReplyInput)} className="underline text-blue-500"
                    >Reply</span></p>
                <div className="my-2">
                    {
                        comment?.replies?.length && comment?.replies?.map((reply: any) => <ReplyCard key={reply?.id} reply={reply} />)
                    }
                </div>
            </div>
        </div>
    )
}
