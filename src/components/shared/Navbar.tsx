"use client"

import { Menu, MenuProps, } from "antd";
import { Header } from "antd/es/layout/layout";

const items: MenuProps["items"] = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'service', label: 'Service' },
    { key: 'contact', label: 'Contact' },
    { key: 'Dashboard', label: 'Dashboard' },
]
export default function Navbar() {
    return (
        <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: "transparent" }}>
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
