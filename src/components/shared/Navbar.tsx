"use client"

import { navbarItem } from "@/constants/navbarItem";
import { authKey } from "@/constants/storageKey";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logoutUser } from "@/redux/slices/userSlice";
import { removeFromLocalStorage } from "@/utils/local-storage";
import { Menu, MenuProps, } from "antd";
import { Header } from "antd/es/layout/layout";
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
        <div className="bg-slate-900 text-white">

            <Header className="" style={{ display: 'flex', alignItems: 'center', backgroundColor: "", border: "0" }}>
                <div className="demo-logo">
                    <Link href={'/'} className="font-semibold">Demo logo</Link>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    className="flex justify-end border-0 text-white"
                    style={{ flex: 1, minWidth: 0, backgroundColor: "transparent", border: "0px", color: 'white' }}
                />
            </Header>
        </div>

    )
}
