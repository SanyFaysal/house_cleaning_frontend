import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button, MenuProps } from "antd"
import Link from "next/link"

export const navbarItem = (role: string | any, handleLogout: any | null | undefined) => {

    let items: MenuProps['items'];
    if (!role?.length) {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Services</Link> },
            { key: 'Signin', label: <Link href={'/signin'}>Signin</Link> },
            { key: 'signup', label: <Link href={'/signup'}>Signup</Link> },
        ]
    }
    else if (role && role === 'USER') {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Service</Link> },
            { key: 'dashboard ', label: <Link href={'/user'}>Dashboard</Link> },
            // {
            //     key: 'cart', label: <Link href={'/'}> <ShoppingCartOutlined style={{ fontSize: "18px" }} /></Link>
            // },
            { key: 'profile ', label: <Link href={'/user'}>Profile</Link> },
            { key: 'logout ', label: <Button onClick={() => handleLogout()}>Logout </Button> },
        ]
    }
    else if (role && role === 'ADMIN') {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Service</Link> },
            { key: 'dashboard ', label: <Link href={'/admin'}>Dashboard </Link> },
            { key: 'profile ', label: <Link href={'/profile'}>Profile </Link> },
            { key: 'logout ', label: <Button onClick={() => handleLogout()}>Logout </Button> },
        ]
    }
    else if (role && role === 'SUPER_ADMIN') {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Service</Link> },
            { key: 'dashboard ', label: <Link href={'/super_admin'}>Dashboard </Link> },
            { key: 'profile ', label: <Link href={'/profile'}>Profile </Link> },
            { key: 'logout ', label: <Button onClick={() => handleLogout()}>Logout </Button> },
        ]
    }
}
