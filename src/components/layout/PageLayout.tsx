'use client'


import { getFromLocalStorage } from "@/utils/local-storage";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { authKey } from "@/constants/storageKey";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";
import { fetchUser } from "@/redux/slices/userSlice";

export default function PageLayout({ children }: { children: React.ReactNode | React.ReactElement }) {
    const dispatch = useAppDispatch()
    const token = getFromLocalStorage(authKey) as string
    useEffect(() => {
        dispatch(fetchUser(token))
    }, [token])
    return (
        <>
            <Navbar />
            <div className="min-h-[78vh]">
                {children}
            </div>
            <Footer />
        </>
    )
}
