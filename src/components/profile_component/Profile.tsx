'use client'

import { useAppSelector } from "@/redux/hook";
import CommonPageTitle from "../ui/CommonPageTitle";
import Link from "next/link";

export default function Profile() {
    const { user } = useAppSelector(state => state.auth);
    return (
        <div>
            <CommonPageTitle title="Profile" items={[
                { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                { title: <p className='text-gray-400'>User</p> },
            ]} />
            <div className="bg-white p-4 rounded">
                <h1 className="text-3xl">{user?.fullName}</h1>
                <h1 className="text-xl">{user?.email}</h1>
                <h1 className="text-xl">{user?.phoneNumber}</h1>
            </div>
        </div>
    )
}
