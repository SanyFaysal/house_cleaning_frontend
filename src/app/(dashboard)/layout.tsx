'use client'

import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, BellOutlined, HomeOutlined, ProfileOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Spin, theme } from 'antd';
import Link from 'next/link';
import { getFromLocalStorage, isLoggedIn } from '@/utils/local-storage';
import { useRouter } from 'next/navigation';
import { dashboardSideItems } from '@/constants/dashboardSideItems';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { authKey } from '@/constants/storageKey';
import { fetchUser } from '@/redux/slices/userSlice';



const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode | React.ReactElement }) => {
    const dispatch = useAppDispatch() as any;
    const { user, isLoading } = useAppSelector(state => state.auth)

    const router = useRouter();

    const token = getFromLocalStorage(authKey) as string

    const items = dashboardSideItems(user?.role)

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        dispatch(fetchUser(token))
    }, [token])

    useEffect(() => {
        if (!token && !user?.id) { router.push('/signin') }
    }, [router, user])
    if (isLoading) {
        return <p className="text-center mt-5">Loading...</p>
    }




    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className='sticky top-4'>
                    <div className=" ml-6 mt-8 mb-4  text-white " >
                        <Button onClick={() => router.push('/')} className=''> <span className='flex '><HomeOutlined />{!collapsed && "  Back to home"}</span></Button>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </div>
            </Sider>
            <Layout>
                <Header style={{ padding: "0 20px", background: "white" }} className=' flex gap-5 items-center justify-end '>

                    <p className='text-xl'>    <BellOutlined /></p>
                    <p className='text-xl border rounded-full px-1'>    <UserOutlined /></p>

                </Header>
                <Content style={{ margin: '10px 16px' }}>

                    <div
                        style={{
                            padding: 15,
                            minHeight: 360,

                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;