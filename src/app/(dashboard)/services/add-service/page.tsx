'use client'

import React, { useState } from 'react';

import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    UploadProps,
    message,
} from 'antd';


import CommonPageTitle from '@/components/ui/CommonPageTitle';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hook';
import { useGetAllCategoriesQuery } from '@/redux/api/categoryApi';
import { arrayReformed } from '@/helpers/category_table_array_reformed';
import { getFromLocalStorage } from '@/utils/local-storage';
import { authKey } from '@/constants/storageKey';
import { useCreateServiceMutation } from '@/redux/api/serviceApi';
import { InboxOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const props: UploadProps = {
    name: 'file',
    action: '/upload.do',
    headers: {
        authorization: 'authorization-text',
    },
}

const AddService = () => {
    const { user } = useAppSelector(state => state.auth)
    const token = getFromLocalStorage(authKey)
    const [image, setImage] = useState<any>()
    const { data } = useGetAllCategoriesQuery(undefined);
    const [addService] = useCreateServiceMutation()
    const categories = data?.data;
    const reformedCategories = arrayReformed(categories, { label: "title", value: 'id' });
    const handleFileChange = (e: any) => {
        const getFile = e.target.files[0];
        if (getFile) {
            setImage(getFile);
        }
    }
    const handleAddService = async (values: any) => {
        try {

            const serviceData = {
                ...values,
                location: JSON.stringify(values.location),
                serviceFeatures: JSON.stringify(values.serviceFeatures),
                pricingTerms: JSON.stringify(values.pricingTerms ?? []),
            }
            const formData = new FormData();
            formData.append('image', image);
            formData.append('data', JSON.stringify(serviceData));


            const res: any = await addService({ token, formData }).unwrap()

            if (res?.status) {
                message.success('Added Successful');
            }
        } catch (error: any) {
            const errorMessage: any = error?.data?.message
            message.error(errorMessage)
        }
    }
    return (
        <>
            <CommonPageTitle title='Add Service' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className='text-gray-400'>All Services</p> },
                ]
            } />

            <Form
                layout="vertical"
                className='grid lg:grid-cols-3 w-full gap-x-5'
                onFinish={handleAddService}
            >

                <Form.Item rules={[{ required: true, message: 'Service name is required' }]} label="Service Name" name='serviceName'>
                    <Input />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Price is required' }]} label="Price" name='price'>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Category is required' }]} label="Category" name='categoryId'>
                    <Select
                        options={reformedCategories}
                    />
                </Form.Item>
                <Form.Item label="Location" rules={[{ required: true, message: 'Location is required' }]} name='location'>
                    <Select
                        mode="tags"
                        style={{ width: '100%', height: '100%' }}
                        placeholder="Write a location and press enter"
                    />
                </Form.Item>

                <Form.Item label="Service Features" rules={[{ required: true, message: 'Feature is required' }]} name='serviceFeatures'>
                    <Select
                        mode="tags"
                        style={{ width: '100%', height: '100%' }}
                        placeholder="Write a feature and press enter"
                    />
                </Form.Item>

                <Form.Item label="Pricing Terms" name='pricingTerms'>
                    <Select
                        mode="tags"
                        style={{ width: '100%', height: '100%' }}
                        placeholder="Write a term and press enter"
                    />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Service Details is required' }]} label="Service Details" name='serviceDetails' className='col-span-2'>
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item

                    label="Upload"

                >
                    <input type="file" required onChange={handleFileChange} id="" />

                </Form.Item>
                <div className='w-full flex justify-end items-end h-full'>
                    <Button type="primary" htmlType="submit">
                        Add Service
                    </Button>
                </div>

            </Form >
        </>
    );
};

export default AddService


























