
'use client'

import { useAppSelector } from "@/redux/hook"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode | React.ReactElement }) {
    const router = useRouter()
    const { user } = useAppSelector(state => state.auth) as any;

    useEffect(() => {
        if (user && user?.role === 'USER') {
            router.push('/user')
        }
        else if (user && user?.role === 'SUPER_ADMIN') {
            router.push('/super_admin')
        }
    }, [user])

    return (
        <div>
            {children}
        </div>
    )
}
