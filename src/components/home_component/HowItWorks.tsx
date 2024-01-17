'use client'
import { Timeline } from "antd";

import { PiNumberCircleFourFill, PiNumberCircleOneFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill } from "react-icons/pi";

export default function HowItWorks() {
    return (
        <div className="mt-12">

            <p>___HOW IT WORKS</p>
            <h1 className="text-2xl font-semibold mt-2">Easiest way to get a service</h1>
            <div className="grid lg:grid-cols-2 gap-10 mt-5 ">

                <div className="w-full h-[400px]">
                    <img src='/images/steps.png' className="mx-auto h-[100%]" />
                </div>
                <div className="gap-5">

                    <Timeline
                        items={[
                            {
                                dot: <PiNumberCircleOneFill className="timeline-clock-icon text-4xl mt-2" />,

                                children: <div className="">
                                    <h3 className="text-xl mb-2 font-semibold">Choose a Schedule</h3>
                                    <p className="text-justify">Effortlessly secure our services by choosing a date and time that suits you with our intuitive timeline scheduling.</p>
                                </div>,
                            },
                            {
                                dot: <PiNumberCircleTwoFill className="timeline-clock-icon text-4xl mt-2" />,

                                children: <div className="">
                                    <h3 className="text-lg mb-2 font-semibold">Personalize your Information</h3>
                                    <p className="text-justify">Tailor your experience by providing personalized information in this step. </p>
                                </div>,
                            },
                            {
                                dot: <PiNumberCircleThreeFill
                                    className="timeline-clock-icon text-4xl mt-2" />,
                                color: 'blue',

                                children: <div className="">
                                    <h3 className="text-lg mb-2 font-semibold">Share your address</h3>
                                    <p>Share your address seamlessly in this step, allowing us to enhance our service tailored to your location. </p>
                                </div>,
                            },
                            {
                                dot: <PiNumberCircleFourFill
                                    className="timeline-clock-icon text-4xl mt-2 " />,
                                color: 'blue',
                                children: <div className="">
                                    <h3 className="text-xl mb-2 font-semibold">Preview & Place Order</h3>
                                    <p>   Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.</p>
                                </div>
                            },

                        ]}

                    />
                </div>
            </div>


        </div >







    )
}
