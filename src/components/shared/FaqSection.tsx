'use client'



import { QuestionCircleOutlined } from '@ant-design/icons';
import { Collapse, Typography } from 'antd';

const { Panel } = Collapse;
const { Title, Text } = Typography;
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const faqData = [
    {
        id: 'faq1',
        question: 'How often should I schedule home services?',
        answer: 'The frequency of home services depends on the type of service. For routine maintenance, scheduling services annually is recommended. However, for specific issues, please refer to our service guidelines or contact our customer support.',
    },
    {
        id: 'faq2',
        question: 'What kind of products do you use for your services?',
        answer:
            'We prioritize the use of eco-friendly and safe products in all our services. Our cleaning supplies and repair materials are selected to ensure both effectiveness and environmental responsibility.',
    },
    {
        id: 'faq3',
        question: 'Do you provide warranties for your services?',
        answer: 'Yes, we offer warranties for our services. The duration and terms of the warranty may vary depending on the type of service. Please check our warranty policy or contact us for specific details.',
    },
    {
        id: 'faq4',
        question: 'How long does it take to complete a typical service?',
        answer: 'The duration of our services varies based on factors such as the type of service, the size of the area, and the complexity of the task. We strive to complete services efficiently and promptly while maintaining quality.',
    },
    {
        id: 'faq5',
        question: 'Are your technicians certified and experienced?',
        answer: 'Yes, our technicians are highly trained, certified, and experienced in their respective fields. We ensure that our team members possess the necessary expertise to deliver professional and reliable services.',
    },
];

const FaqSection = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div

            className="bg-gray-50">
            <div className="container mx-auto py-10">


                <div className="">
                    <Title level={3} className="text-start pb-6 text-white">
                        Answers to Common Questions
                    </Title>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['faq1']}
                        expandIcon={({ isActive }) => <QuestionCircleOutlined rotate={isActive ? 90 : 0} />}
                    >
                        {faqData.map((faq) => (
                            <Panel
                                header={faq.question}
                                key={faq.id}
                                className="bg-white text-gray-800 rounded-md mb-4"
                            >
                                <Text className='text-blue-500'>{faq.answer}</Text>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
