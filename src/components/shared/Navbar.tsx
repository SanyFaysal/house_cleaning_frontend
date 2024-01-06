"use client"

import { Menu, MenuProps, } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";

const items: MenuProps["items"] = [
    { key: 'home', label: 'Home' },
    { key: 'signin', label: <Link href={'/signin'}>Signin</Link> },
    { key: 'signup', label: <Link href={'/signup'}>Signup</Link> },
]
export default function Navbar() {
    return (
        <Header className="" style={{ display: 'flex', alignItems: 'center', backgroundColor: "transparent" }}>
            <div className="demo-logo">
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                className="flex justify-end border-0"
                style={{ flex: 1, minWidth: 0, backgroundColor: "transparent" }}
            />
        </Header>)
}
