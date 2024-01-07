'use client'

import React from 'react';

import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    message,
} from 'antd';


import CommonPageTitle from '@/components/ui/CommonPageTitle';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hook';
import { useGetAllCategoriesQuery } from '@/redux/api/categoryApi';
import { arrayReformed } from '@/helpers/arrayRefortemed';
import { getFromLocalStorage } from '@/utils/local-storage';
import { authKey } from '@/constants/storageKey';
import { useCreateServiceMutation } from '@/redux/api/serviceApi';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const AddService = () => {
    const { user } = useAppSelector(state => state.auth)
    const token = getFromLocalStorage(authKey)
    const { data } = useGetAllCategoriesQuery(undefined);
    const [addService] = useCreateServiceMutation()


    const handleAddService = async (values: any) => {
        try {
            const data = {
                ...values,
                location: JSON.stringify(values.location),
                serviceFeatures: JSON.stringify(values.serviceFeatures),
                pricingTerms: JSON.stringify(values.pricingTerms ?? []),
            }
            const res: any = await addService({ token, data }).unwrap()
            console.log(res)
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
                    { title: <p>Add Category</p> },
                ]
            } />

            <Form
                layout="vertical"
                className='grid lg:grid-cols-3 w-full gap-x-5'
                onFinish={handleAddService}
            >

                <Form.Item rules={[{ required: true, message: 'Title name is required' }]} label="title Name" name='title'>
                    <Input />
                </Form.Item>

                <div className='w-full flex justify-end items-end h-full'>
                    <Button type="primary" htmlType="submit">
                        Add Category
                    </Button>
                </div>

            </Form >
        </>
    );
};

export default AddService