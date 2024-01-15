import { BiSearch } from "react-icons/bi";

export default function Banner() {
    return (
        <div className='h-[75vh] mx-[-48px] opacity-90'
            style={{ backgroundImage: `url('https://cognizant.scene7.com/is/image/cognizant/strategic-partner-microsoft-banner-desktop-1?wid=1600&fit=wrap')` }}>
            <div className="flex flex-col items-center justify-center h-full ">
                <h1 className="text-6xl text-center text-white font-bold pt-12">Your Personal Assistant</h1>
                <p className="text-3xl text-white text-center mt-4">One-stop solution for your services. Order any service, anytime.</p>
                <div className="flex justify-center  mt-12 items-center w-1/3">


                    <input placeholder="
Find your service here e.g. AC, Car, Facial …
" className="bg-white px-5 py-4 w-full text-lg rounded-l-lg focus:outline-none mx-auto" />
                    <div className=" bg-white  p-2 rounded-r-lg">
                        <button className="text-white p-3 bg-blue-500 rounded-lg  "><BiSearch className='bg-blue-500  text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
