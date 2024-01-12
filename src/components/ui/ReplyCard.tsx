'use client'


import { authKey } from "@/constants/storageKey";
import { formateDateWithYear } from "@/helpers/formate_date_time";
import { useMakeReplyMutation } from "@/redux/api/serviceApi";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Avatar } from "antd";
import { useState } from "react";

export default function ReplyCard({ reply }: any) {

    return (
        <div className="flex gap-2 items-start">
            <Avatar style={{ backgroundColor: "#fcc5fc", color: "#ee22ee", verticalAlign: 'small' }}
                className="bg-[#fcc5fc] font-semibold" gap={2}>
                {reply?.user?.fullName?.slice(0, 1)}

            </Avatar>
            <div>
                <p className="font-semibold">{reply?.user?.fullName}</p>
                <p className=""> on <span className="font-semibold">{formateDateWithYear(reply?.createdAt)}</span></p>
                <p className="mt-2">{reply?.reply}</p>


            </div>
        </div>
    )
}
