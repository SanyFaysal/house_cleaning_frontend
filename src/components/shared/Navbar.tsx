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
        <div className="sticky top-0 z-[99] h-[90px] 	bg-white ">
            <div className=" grid grid-cols-4">
                <Link href={'/'} className="font-semibold col-span-1 lg:py-3 py-1 px-12 lg:px-12  bg-[#f7f7f7] rounded-br-[600px]">
                    <Image src={'/images/logo2.png'} height={180} width={200} alt="logo" />
                </Link>

                <div className="flex flex-col items-end w-full col-span-3 ml-[-4px]   ">
                    <p className="font-medium text-sm  bg-[#f7f7f7]   w-full lg:py-1 px-12 lg:px-12  text-end ">Call our team today at  <span className="text-sky-500">  0123456789</span></p>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        className="flex justify-end  border-0 text-black z-[99] w-full lg:py-1 lg:pr- "
                        style={{ flex: 1, minWidth: 0, fontWeight: '500', paddingRight: "30px", backgroundColor: "transparent", color: 'black', border: "0px", }}
                    />
                </div>
            </div>



        </div>

    )
}
