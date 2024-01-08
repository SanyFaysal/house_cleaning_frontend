'use client'
import React, { useEffect, useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { useParams } from 'next/navigation';
import { useGetServiceByIdQuery } from '@/redux/api/serviceApi';
import ScheduleManagementForm from '@/components/booking_component/ScheduleManagementForm';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import PersonalizeInfoForm from '@/components/booking_component/PersonalizeInfoForm';
import AddressForm from '@/components/booking_component/AddressForm';
const AddBooking = () => {
    const params = useParams()
    const { data } = useGetServiceByIdQuery(params?.serviceId)
    const service = data?.data;
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [goNext, setGoNext] = useState<boolean>(false);
    const next = () => {
        if (!goNext) {
            return message.error('Please fill up all credentials')
        } else {
            setCurrent(current + 1);
            setToLocalStorage('step', current + 1)
        }
    };

    const prev = () => {
        setCurrent(current - 1);
        setToLocalStorage('step', current - 1)
    };
    useEffect(() => {
        const currentStep: any = getFromLocalStorage('step') ? Number(getFromLocalStorage('step')) as number : 0
        setCurrent(currentStep)
    }, [])
    const steps = [
        {
            title: 'Schedule Management',
            content: <ScheduleManagementForm service={service} setGoNext={setGoNext} />,
        },
        {
            title: 'Personalize your Information',
            content: <PersonalizeInfoForm setGoNext={setGoNext} />,
        },
        {
            title: 'Share your address',
            content: <AddressForm setGoNext={setGoNext} />,
        },
        {
            title: 'Preview Details',
            content: <AddressForm setGoNext={setGoNext} />,
        },
    ];
    const items = steps.map((item) => ({ key: item.title, title: item.title }));



    const handleAddBooking = () => {

    }
    return (
        <>

            <div className="mb-5 text-center pt-10 bg-gray-100 pb-12 px-12 mx-[-48px] ">
                <h2 className=' text-sky-500 text-2xl'>Bookings for</h2>
                <h1 className="text-2xl    mb-3">{service?.serviceName}</h1>
                <h1 className="text-xl  text-gray-800   mb-3">{service?.price} Taka</h1>
            </div>

            <Steps current={current} items={items} />

            <div className='bg-gray-100 px-5 py-8 rounded mt-3 min-h-[40vh]'>{steps[current].content}</div>
            <div className='mb-5 flex justify-end' style={{ marginTop: 24 }}>
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={handleAddBooking}>
                        Done
                    </Button>
                )}

            </div>
        </>
    );
};

export default AddBooking;