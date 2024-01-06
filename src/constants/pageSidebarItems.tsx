import { CarOutlined, DashboardFilled, DashboardOutlined, DashboardTwoTone, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button, MenuProps } from "antd"
import Link from "next/link"

export const pageSidebarItems = (role: string | any, handleLogout) => {

    let items: MenuProps['items'];
    if (!role?.length) {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Signin', label: <Link href={'/signin'}>Signin</Link> },
            { key: 'signup', label: <Link href={'/signup'}>Signup</Link> },
        ]
    }
    else if (role && role === 'USER') {
        return items = [
            { key: 'dashboard ', label: <Link href={'/user'}>Dashboard</Link> },
            {
                key: 'cart', label: <Link href={'/'}> <ShoppingCartOutlined style={{ fontSize: "18px" }} /></Link>
            },
            { key: 'profile ', label: <Link href={'/dashboard'}><UserOutlined style={{ fontSize: "18px" }} /> </Link> },
            { key: 'logout ', label: <Button onClick={() => handleLogout()}>Logout </Button> },
        ]
    }
    else if (role && role !== 'USER') {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'dashboard ', label: <Link href={'/profile'}>Dashboard </Link> },
            { key: 'profile ', label: <Link href={'/profile'}>Profile </Link> },
        ]
    }
}
