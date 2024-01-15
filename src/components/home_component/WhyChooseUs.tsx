import { BiPhoneCall } from "react-icons/bi";

export default function WhyChooseUs() {
    return (
        <div className="my-10">

            <p>___WHY CHOOSE US</p>
            <h1 className="text-2xl font-semibold">Because we care about your safety..</h1>
            <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="grid grid-cols-2 gap-5 ">
                    <div className=" flex items-center gap-x-10 justify-center p-5 ">
                        <BiPhoneCall className='text-4xl text-blue-500' />
                        <p className="text-xl">24/7 <br /> Support</p>
                    </div>

                    <div className=" flex gap-x-10 justify-center items-center p-5  ">
                        <BiPhoneCall className='text-4xl text-blue-500 ' />
                        <p className="text-xl ">24/7 <br /> Support</p>
                    </div>

                    <div className=" flex items-center gap-x-10 justify-center p-5 ">
                        <BiPhoneCall className='text-4xl text-blue-500' />
                        <p className="text-xl">24/7 <br /> Support</p>
                    </div>

                    <div className=" flex gap-x-10 justify-center items-center p-5">
                        <BiPhoneCall className='text-4xl text-blue-500 ' />
                        <p className="text-xl ">24/7 <br /> Support</p>
                    </div>
                </div>

                <div>
                    <img src="https://www.floortrendsmag.com/ext/resources/Issues/2019/12-December/1219_ft_Buddy_img2.jpg?1576182091" alt="" />
                </div>
            </div>
        </div>






    )
}
