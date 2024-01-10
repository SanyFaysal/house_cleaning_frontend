'use client'


import { getFromLocalStorage, isLoggedIn } from "@/utils/local-storage";

import { authKey } from "@/constants/storageKey";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { fetchUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Spin } from "antd";
import LoadingComponent from "@/components/ui/Loading";

export default function AuthRequired({ children }: { children: React.ReactNode | React.ReactElement }) {
    const dispatch = useAppDispatch() as any;
    const { user, isLoading } = useAppSelector(state => state.auth)
    const router = useRouter();

    const token = getFromLocalStorage(authKey) as string

    useEffect(() => {
        dispatch(fetchUser(token))
    }, [token])

    useEffect(() => {

        if (!token && !user?.id) { router.push('/signin') }

    }, [router, user])


    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <>
            <Navbar />
            <div className="lg:mx-12">
                {children}
            </div>
            <Footer />
        </>
    )
}
