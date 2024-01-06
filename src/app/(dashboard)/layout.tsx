'use client'

import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, BellOutlined, HomeOutlined, ProfileOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
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
    const loggedIn = isLoggedIn();
    const token = getFromLocalStorage(authKey) as string

    const items = dashboardSideItems(user?.role)

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    useEffect(() => {
        if (!loggedIn) { router.push('/signin') }
    }, [router])



    useEffect(() => {
        dispatch(fetchUser(token))
    }, [token])

    if (isLoading) {
        return <p>Loading...</p>
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
                <Header style={{ padding: "0 20px", background: colorBgContainer }} className=' flex gap-5 items-center justify-end '>

                    <p className='text-xl'>    <BellOutlined /></p>
                    <p className='text-xl border rounded-full px-1'>    <UserOutlined /></p>

                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 15,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
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