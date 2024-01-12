'use client'


import { authKey } from "@/constants/storageKey";
import { useAddCommentMutation } from "@/redux/api/serviceApi";
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, message } from "antd";

import { useState } from "react";

export default function Comments({ serviceId }: { serviceId: any }) {

    const [comment, setComment] = useState<string>("")
    const token = getFromLocalStorage(authKey);
    const { user } = useAppSelector(state => state.auth);

    const [makeComment] = useAddCommentMutation();

    const handleAddComment = async () => {
        try {
            if (!comment) {
                message.error('Please write your comment')
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
    return (
        <div className=" mb-10">
            <h1 className="text-xl">All comments</h1>
            <p>Total comments : { }</p>
            <div className="flex gap-4">
                <input value={comment} onChange={(e) => setComment(e.target.value)} className="border py-2 px-3 w-1/2 rounded" />
                <button onClick={handleAddComment} className="px-3 py-2 border rounded bg-blue-500 text-white">Comment</button>
            </div>
        </div>
    )
}
