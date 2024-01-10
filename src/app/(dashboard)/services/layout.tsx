'use client'

import LoadingComponent from "@/components/ui/Loading";
import { authKey } from "@/constants/storageKey";
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function layout({ children }: { children: React.ReactNode | React.ReactElement }) {
    const token = getFromLocalStorage(authKey)
    const router = useRouter()
    const { user, isLoading } = useAppSelector(state => state.auth) as any;

    useEffect(() => {
        if (!token && !user?.role) {
            router.push('/signin')
        }
        if (token && user && user?.role === 'USER') {
            router.push('/user')
        }

    }, [user])
    if (isLoading) {
        return <LoadingComponent />
    }
    return (
        <>{children}</>
    )
}
