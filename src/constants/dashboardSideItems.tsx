import { BookOutlined, HistoryOutlined, OrderedListOutlined, PlusOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button, MenuProps } from "antd"
import Link from "next/link"

export const dashboardSideItems = (role: string | any) => {

    let items: MenuProps['items'];
    if (!role?.length) {
        return items = []
    }
    else if (role && role === 'USER') {
        return items = [
            {
                key: 'dashboard ',
                label: <Link href={'/user'}>Profile</Link>,
                icon: <UserOutlined />
            },
            {
                key: 'cart',
                label: <Link href={'/'}>My Bookings</Link>,
                icon: <BookOutlined />
            },
            {
                key: 'profile ',
                label: <Link href={'/dashboard'}>History </Link>,
                icon: <HistoryOutlined />
            },

        ]
    }
    else if (role && role === 'ADMIN') {
        return items = [
            {
                key: 'dashboard ',
                label: <Link href={'/user'}>Profile</Link>,
                icon: <UserOutlined />
            },
            {
                key: 'services',
                label: "Services",
                icon: <BookOutlined />,
                children: [
                    {
                        key: 'all_services',
                        label: <Link href={'/'}>All Services</Link>,
                        icon: <PlusOutlined />
                    },
                    {
                        key: 'add_service',
                        label: <Link href={'/'}>Add Service</Link>,
                    }
                ]
            },
            {
                key: 'profile ',
                label: <Link href={'/dashboard'}>History </Link>,
                icon: <HistoryOutlined />
            },

        ]
    }
    else if (role && role === 'SUPER_ADMIN') {
        return items = [
            {
                key: 'dashboard',
                label: <Link href={'/user'}>Profile</Link>,
                icon: <UserOutlined />
            },
            {
                key: 'services',
                label: "Services",
                icon: <BookOutlined />,
                children: [
                    {
                        key: 'all_services',
                        label: <Link href={'/'}>All Services</Link>,
                        icon: <OrderedListOutlined />
                    },
                    {
                        key: 'add_services',
                        label: <Link href={'/'}>Add Service</Link>,
                        icon: <PlusOutlined />
                    }
                ]
            },
            {
                key: 'booking',
                label: <Link href={'/bookings'}>All Bookings</Link>,
                icon: <BookOutlined />,
            },
            {
                key: 'Blog',
                label: "All Blogs",
                icon: <BookOutlined />,
                children: [
                    {
                        key: 'all_blogs',
                        label: <Link href={'/'}>All Blogs</Link>,
                        icon: <OrderedListOutlined />
                    },
                    {
                        key: 'add_blogs',
                        label: <Link href={'/'}>Add Service</Link>,
                        icon: <PlusOutlined />
                    }
                ]
            },
            {
                key: 'users',
                label: "Users",
                icon: <BookOutlined />,
                children: [
                    {
                        key: 'all_blogs',
                        label: <Link href={'/'}>All Users</Link>,
                        icon: <OrderedListOutlined />
                    },
                    {
                        key: 'add_blogs',
                        label: <Link href={'/'}>Add User</Link>,
                        icon: <PlusOutlined />
                    }
                ]
            },


        ]
    }
}
