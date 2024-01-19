'use client'

import Profile from "@/components/profile_component/Profile";
import CommonPageTitle from "@/components/ui/CommonPageTitle";
import Link from "next/link";

export default function UserDashboardHome() {
    return (
        <div>

            <CommonPageTitle title='Profile' items={
                [
                    { title: <Link href={`/`}>Home</Link> },
                    { title: <p className=''>Profile</p> },
                ]
            } />
            <Profile /></div>
    )
}
