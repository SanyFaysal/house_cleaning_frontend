import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-12">


      <div className="container mx-auto flex flex-col md:flex-row items-center text-center mt-5 justify-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-2">123 Service Street, Cityville, State, 12345</p>
          <p className="mb-2">Email: info@homesync-solution.com</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
        </div>
        {/* <div className="">
          <a href="#" className="text-gray-300 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Instagram
          </a>
        </div> */}
      </div>
      <p className="text-center mt-8">&copy; 2024 HomeSync Solution. All rights reserved.</p>
    </footer>
  )
}
