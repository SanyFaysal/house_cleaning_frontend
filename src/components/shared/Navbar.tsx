"use client"

import { navbarItem } from "@/constants/navbarItem";
import { authKey } from "@/constants/storageKey";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logoutUser } from "@/redux/slices/userSlice";
import { removeFromLocalStorage } from "@/utils/local-storage";
import { Menu, MenuProps, } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);

    const handleLogout = () => {
        removeFromLocalStorage(authKey);
        dispatch(logoutUser())
    }
    const items = navbarItem(user?.role, handleLogout)

    return (
        <div className="sticky top-0 z-[99] 	 ">
            <Header className="" style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: "white", border: "0",

            }}>
                <div className="demo-logo">
                    <Link href={'/'} className="font-semibold">
                        <Image src={'/images/logo.png'} height={170} width={200} alt="logo" />
                    </Link>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    className="flex justify-end border-0 text-black z-[99]"
                    style={{ flex: 1, minWidth: 0, fontWeight: '500', backgroundColor: "transparent", color: 'black', border: "0px", }}
                />
            </Header>
        </div>

    )
}
