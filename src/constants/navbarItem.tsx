import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, MenuProps } from "antd"
import Link from "next/link"
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

export const navbarItem = (role: string | any, handleLogout: any | null | undefined) => {

    let items: MenuProps['items'];
    if (!role?.length) {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Services</Link> },
            { key: 'about', label: <Link href={'/about'}>About</Link> },
            { key: 'Signin', label: <Link href={'/signin'}>Signin</Link> },
            { key: 'signup', label: <Link href={'/signup'}>Signup</Link> },
        ]
    }
    else if (role && role === 'USER') {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Service</Link> },
            { key: 'about', label: <Link href={'/about'}>About</Link> },
            { key: 'dashboard ', label: <Link href={'/user'}>Dashboard</Link> },
            {
                key: 'cart', label: <Link href={'/cart'} className="mt-1">
                    <Badge dot><PiShoppingCartSimpleLight className='text-xl font-semibold' /></Badge>
                </Link>
            },

            { key: 'profile ', label: <Link href={'/user'}><button><RxPerson className='text-xl' /></button></Link> },
            { key: 'logout ', label: <Button onClick={() => handleLogout()} className="" style={{ fontWeight: '500' }}>Logout </Button> },
        ]
    }
    else if (role && role === 'ADMIN') {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Service</Link> },
            { key: 'about', label: <Link href={'/about'}>About</Link> },
            { key: 'dashboard ', label: <Link href={'/admin'}>Dashboard </Link> },
            {
                key: 'profile ', label: <Link href={'/profile'} ><Badge><RxPerson className='text-xl ' /></Badge>
                </Link>
            },
            { key: 'logout ', label: <Button onClick={() => handleLogout()} >Logout </Button> },
        ]
    }
    else if (role && role === 'SUPER_ADMIN') {
        return items = [
            { key: 'home', label: <Link href={'/'}>Home</Link> },
            { key: 'Services', label: <Link href={'/service'}>Service</Link> },
            { key: 'dashboard ', label: <Link href={'/super_admin'}>Dashboard </Link> },
            { key: 'profile ', label: <Link href={'/profile'}><Badge><RxPerson className='text-xl ' /> </Badge></Link> },
            { key: 'logout ', label: <Button onClick={() => handleLogout()}>Logout </Button> },
        ]
    }
}
