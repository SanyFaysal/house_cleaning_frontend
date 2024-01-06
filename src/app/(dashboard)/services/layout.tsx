'use client'

import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function layout({ children }: { children: React.ReactNode | React.ReactElement }) {

    const router = useRouter()
    const { user, isLoading } = useAppSelector(state => state.auth) as any;

    useEffect(() => {
        if (!user && !user?.role) {
            router.push('/signin')
        }
        if (user && user?.role === 'USER') {
            router.push('/user')
        }

    }, [user])
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <>{children}</>
    )
}
