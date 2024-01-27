'use client'


import { authKey } from "@/constants/storageKey";
import { useAddCommentMutation, useGetServiceCommentsQuery } from "@/redux/api/serviceApi";
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, message } from "antd";

import { useState } from "react";
import CommentCard from "../ui/CommentCard";

export default function Comments({ serviceId }: { serviceId: any }) {
    console.log({ serviceId })
    const [comment, setComment] = useState<string>("")
    const token = getFromLocalStorage(authKey);
    const { user } = useAppSelector(state => state.auth);
    const { data } = useGetServiceCommentsQuery(serviceId)
    const comments = data?.data;
    const [makeComment] = useAddCommentMutation();

    const handleAddComment = async () => {
        try {
            if (!comment) {
                return message.error('Please write your comment')
            }
            if (!user?.id) {
                return message.error('Please login first')
            }
            const data = {
                userId: user.id,
                serviceId,
                comment
            }
            const res = await makeComment({ data, token }).unwrap();
            if (res.status) {
                setComment('')
            }


        } catch (error) {
            console.log(error);
            message.error('Something went wrong')
        }

    }
    console.log({ comments })
    return (
        <div className=" mb-10">
            <h1 className="text-xl">All comments</h1>
            <p className="text-md">Total comments : {comments?.length}</p>
            <div className="flex gap-4">
                <input value={comment} onChange={(e) => setComment(e.target.value)} className="border py-2 px-3 w-1/2 rounded" />
                <button onClick={handleAddComment} className="px-3 py-2 border rounded bg-blue-500 text-white">Comment</button>
            </div>
            <div className="grid grid-cols-1 gap-5 my-5">
                {comments?.map((comment: any) => <CommentCard key={comment?.id} comment={comment} />)}
            </div>

        </div>
    )
}
