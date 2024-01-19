'use client'

import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
    message,
} from 'antd';
import CommonPageTitle from '@/components/ui/CommonPageTitle';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hook';
import { useCreateCategoryMutation, useGetCategoryByIdQuery, useUpdateCategoryMutation } from '@/redux/api/categoryApi';
import { getFromLocalStorage } from '@/utils/local-storage';
import { authKey } from '@/constants/storageKey';
import { useParams } from 'next/navigation';
import LoadingComponent from '@/components/ui/Loading';


const EditCategory = () => {
    const [image, setImage] = useState();
    const params = useParams();
    const { user } = useAppSelector(state => state.auth)
    const token = getFromLocalStorage(authKey)
    const { data }: any = useGetCategoryByIdQuery(params?.categoryId);
    const category = data?.data;
    const [updateCategory] = useUpdateCategoryMutation()


    const handleFileChange = (e: any) => {
        const getFile = e.target.files[0];
        if (getFile) {
            setImage(getFile);
        }
    }

    const handleAddCategory = async (data: any) => {
        try {
            const formData = new FormData();
            if (image) { formData.append('image', image) }
            formData.append("data", JSON.stringify(data))

            const res: any = await updateCategory({ id: category?.id, token, formData }).unwrap()

            if (res?.status) {
                message.success('Update Successful');
            }
        } catch (error: any) {
            const errorMessage: any = error?.data?.message
            message.error(errorMessage)
        }
    }

    if (!category) {
        return <LoadingComponent />
    }
    return (
        <>
            <CommonPageTitle title='Edit Category' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className=''>Edit Category</p> },
                ]
            } />

            <Form
                layout="vertical"
                initialValues={category}
                className='grid lg:grid-cols-2 w-full gap-x-5'
                onFinish={handleAddCategory}
            >

                <Form.Item label="Category Title" name='title'>
                    <Input />
                </Form.Item>
                <Form.Item

                    label="Upload"

                >
                    <input type="file" onChange={handleFileChange} id="" />

                </Form.Item>
                <div className='w-full flex justify-start items-center mt-2'>
                    <Button type="primary" htmlType="submit">
                        Update Category
                    </Button>
                </div>

            </Form >
        </>
    );
};

export default EditCategory