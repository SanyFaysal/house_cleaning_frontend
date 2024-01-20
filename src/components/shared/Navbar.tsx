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
import Marquee from "react-fast-marquee";


export default function Navbar() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);

    const handleLogout = () => {
        removeFromLocalStorage(authKey);
        dispatch(logoutUser())
    }
    const items = navbarItem(user?.role, handleLogout)

    return (

        <div className="    sticky top-[-24px] z-[99] 	bg-white ">
            <Marquee className="text-xs bg-orange-50 text-orange-400 ">
                <p className="lg:py-1 text-end px-5">Limited-time offer: 20% off on all electronic repairs this week !</p>
                <p className="lg:py-1 text-end px-5">Featured Service: Repairing Service, Book Now !</p>
                <p className="lg:py-1 text-end px-5">Exciting News! Now offering eco-friendly cleaning services.</p>
                <p className="lg:py-1 text-end px-5">Emergency? Call us at 01235456789 for swift assistance.</p>
            </Marquee>
            <div className=" grid grid-cols-4 shadow ">
                <Link href={'/'} className="font-semibold col-span-1  py-2 lg:px-12  ">
                    <Image src={'/images/logo2.png'} height={180} width={200} alt="logo" className="mt-1" />
                </Link>

                <div className="flex flex-col justify-center items-end w-full my-auto col-span-3 ml-[-4px]    ">

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
