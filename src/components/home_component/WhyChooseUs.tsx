import { BiPhoneCall } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoHappyOutline } from "react-icons/io5";
import { TbClockShield } from "react-icons/tb";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GrServices } from "react-icons/gr";

export default function WhyChooseUs() {
    return (
        <div className="my-20">

            <p>___WHY CHOOSE US</p>
            <h1 className="text-2xl font-semibold mt-2">Because we care about your safety..</h1>
            <div className="grid lg:grid-cols-2 gap-10 mt-5">
                <div className="grid grid-cols-3 gap-5">

                    <div className="    flex   flex-col gap-2  text-center items-center gap-x-5 bg-gray-50 rounded  justify-center">
                        <BiPhoneCall className='text-4xl text-blue-500' />
                        <p className=" ">24/7 <br /> Support</p>
                    </div>

                    <div className="   flex   flex-col gap-2  text-center gap-x-5 bg-gray-50 rounded  justify-center items-center  ">

                        <VscWorkspaceTrusted
                            className='text-4xl text-blue-500 ' />
                        <p className="  ">Experienced <br /> Professionals</p>
                    </div>
                    <div className="    flex   flex-col gap-2  text-center items-center gap-x-5 bg-gray-50 rounded  justify-center  ">
                        <IoHappyOutline
                            className='text-4xl text-blue-500' />
                        <p className=" ">Customer <br /> Satisfaction</p>
                    </div>
                    <div className="    flex   flex-col gap-2  text-center items-center gap-x-5 bg-gray-50 rounded  justify-center  ">
                        <TbClockShield
                            className='text-4xl text-blue-500' />
                        <p className=" ">Timely  <br /> Delivery</p>
                    </div>
                    <div className="    flex   flex-col gap-2  text-center items-center gap-x-5 bg-gray-50 rounded  justify-center  ">
                        <MdOutlinePriceCheck className='text-4xl text-blue-500' />
                        <p className="">Transparent  <br /> Pricing</p>
                    </div>


                    <div className="   flex   flex-col gap-2  text-center gap-x-5 bg-gray-50 rounded  justify-center items-center ">
                        <GrServices
                            className='text-4xl text-blue-500 ' />
                        <p className="  ">Wide range of   <br /> Solutions</p>
                    </div>
                </div>
                <div>
                    <img className="rounded-lg w-fit" src="https://www.floortrendsmag.com/ext/resources/Issues/2019/12-December/1219_ft_Buddy_img2.jpg?1576182091" alt="" />
                </div>
            </div>
        </div>
    )
}
