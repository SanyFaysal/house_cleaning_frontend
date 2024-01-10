'use client'

import React, { useEffect, useState } from 'react';

import {
    Button,

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
import { arrayReformed } from '@/helpers/category_table_array_reformed';
import { getFromLocalStorage } from '@/utils/local-storage';
import { authKey } from '@/constants/storageKey';
import { useGetServiceByIdQuery, useUpdateServiceMutation } from '@/redux/api/serviceApi';
import { useParams } from 'next/navigation';
import LoadingComponent from '@/components/ui/Loading';
import { IService } from '@/types/data';

const { TextArea } = Input;

const EditService = () => {
    const [service, setService] = useState<IService>()
    const params = useParams()
    const { data: response } = useGetServiceByIdQuery(params?.serviceId)
    const serviceData = response?.data;


    const { user } = useAppSelector(state => state.auth)
    const token = getFromLocalStorage(authKey)
    const [image, setImage] = useState<any>()
    const { data } = useGetAllCategoriesQuery(undefined);
    const [updateService] = useUpdateServiceMutation()
    const categories = data?.data;
    const reformedCategories = arrayReformed(categories, { label: "title", value: 'id' });
    const handleFileChange = (e: any) => {
        const getFile = e.target.files[0];
        if (getFile) {
            setImage(getFile);
        }
    }
    const handleEditService = async (values: any) => {
        try {

            const serviceData = {
                ...values,
                location: JSON.stringify(values?.location ?? "[]"),
                serviceFeatures: JSON.stringify(values?.serviceFeatures ?? "[]"),
                pricingTerms: JSON.stringify(values?.pricingTerms ?? "[]"),
            }

            const formData = new FormData();
            if (image) { formData.append('image', image) }
            formData.append('data', JSON.stringify(serviceData));

            const res: any = await updateService({ id: params?.serviceId, token, formData }).unwrap()
            if (res?.status) {
                message.success('Updated Successful');
            }
        } catch (error: any) {
            console.log({ error })
            const errorMessage: any = error?.error
            message.error(errorMessage)
        }
    }


    useEffect(() => {
        if (serviceData) {
            setService({
                ...serviceData,
                location: JSON.parse(serviceData?.location ?? "[]"),
                serviceFeatures: JSON.parse(serviceData?.serviceFeatures ?? "[]"),
                pricingTerms: JSON.parse(serviceData?.pricingTerms ?? "[]"),
            }
            )
        }
    }, [serviceData]);

    if (!service) {
        return <LoadingComponent />
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
                initialValues={service}
                onFinish={handleEditService}
            >

                <Form.Item label="Service Name" name='serviceName'>
                    <Input />
                </Form.Item>
                <Form.Item label="Price" name='price'>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Category" name='categoryId'>
                    <Select
                        options={reformedCategories}
                    />
                </Form.Item>
                <Form.Item label="Location" name='location'>
                    <Select
                        mode="tags"
                        style={{ width: '100%', height: '100%' }}
                        placeholder="Write a location and press enter"
                    />
                </Form.Item>

                <Form.Item label="Service Features" name='serviceFeatures'>
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
                <Form.Item label="Service Details" name='serviceDetails' className='col-span-2'>
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item

                    label="Upload"

                >
                    <input type="file" onChange={handleFileChange} id="" />
                    <p>Service image</p>
                    <img src={service?.image} className='mt-1 w-40' />
                </Form.Item>
                <div className='w-full flex justify-end items-end h-full col-span-3'>
                    <Button type="primary" htmlType="submit">
                        Update Service
                    </Button>
                </div>

            </Form >
        </>
    );
};

export default EditService
