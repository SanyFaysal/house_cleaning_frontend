import { BiPhoneCall } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function WhyChooseUs() {
    return (
        <div className="my-10">

            <p>___WHY CHOOSE US</p>
            <h1 className="text-2xl font-semibold mt-2">Because we care about your safety..</h1>
            <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="grid grid-cols-3 gap-5">

                    <div className="   flex   flex-col text-center items-center gap-x-5 bg-slate-50 justify-center">
                        <BiPhoneCall className='text-4xl text-blue-500' />
                        <p className="text-lg">24/7 <br /> Support</p>
                    </div>

                    <div className="  flex   flex-col text-center gap-x-5 bg-slate-50 justify-center items-center  ">

                        <VscWorkspaceTrusted
                            className='text-4xl text-blue-500 ' />
                        <p className="text-lg ">Experienced <br /> Professionals</p>
                    </div>

                    <div className="   flex   flex-col text-center items-center gap-x-5 bg-slate-50 justify-center  ">
                        <BiPhoneCall className='text-4xl text-blue-500' />
                        <p className="text-lg">Customer <br /> Satisfaction</p>
                    </div>
                    <div className="   flex   flex-col text-center items-center gap-x-5 bg-slate-50 justify-center  ">
                        <BiPhoneCall className='text-4xl text-blue-500' />
                        <p className="text-lg">Customer <br /> Satisfaction</p>
                    </div>
                    <div className="   flex   flex-col text-center items-center gap-x-5 bg-slate-50 justify-center  ">
                        <BiPhoneCall className='text-4xl text-blue-500' />
                        <p className="text-lg">Customer <br /> Satisfaction</p>
                    </div>

                    <div className="  flex   flex-col text-center gap-x-5 bg-slate-50 justify-center items-center ">
                        <BiPhoneCall className='text-4xl text-blue-500 ' />
                        <p className="text-lg ">Wide Range of  <br /> Services</p>
                    </div>
                </div>
                <div>
                    <img className="rounded-lg w-fit" src="https://www.floortrendsmag.com/ext/resources/Issues/2019/12-December/1219_ft_Buddy_img2.jpg?1576182091" alt="" />
                </div>

            </div>


        </div>







    )
}
