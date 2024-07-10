import { SlLocationPin } from "react-icons/sl";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { PiWatch } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Footer() {
  return (
    <div className="mt-24">
      <div className="flex flex-col sm:flex-row w-full justify-between max-w-[1200px] m-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-btnColor h-10 w-10 flex items-center justify-center rounded-lg mb-3">
            <SlLocationPin className="text-gray-600 text-2xl" />
          </div>
          <h1 className="text-center">
            Wibautstraat 150,
            <hr /> 1091 GR Amsterdam
          </h1>
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-btnColor h-10 w-10 flex items-center justify-center rounded-lg mb-3">
            <HiOutlineExclamationCircle className="text-gray-600 text-2xl" />
          </div>
          <h1 className="text-center ">
            For more information call: <hr /> +3168424483
          </h1>
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-btnColor h-10 w-10 flex items-center justify-center rounded-lg mb-3">
            <PiWatch className="text-gray-600 text-2xl" />
          </div>
          <h1 className="text-center">
            MON - SAT <hr /> 8:00AM - 6:00PM
          </h1>
        </div>
      </div>

      <div className=" bg-sectionColor plsa-8">
        <div className="flex flex-col sm:flex-row items-center max-w-[1200px] w-full m-auto">
          <div className="w-full flex justify-center sm:justify-start ">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUrOuxTLlno4UizjDyq8IhFZTT0tE-PVcOT24RNjJ2A5IbRwJOvUEMT7SHY4BZYcikYG5ytDPCV2Vj749-R9nYxV-Lu2KDwFljVigT2KpZfPVo3E9H9rf1TA"
              alt=""
              className="h-16 rounded-full"
            />
          </div>
          <div className="flex justify-center my-10 w-full ">
            <div className="bg-btnColor h-10 w-10 flex items-center justify-center rounded-lg mb-3 mr-4">
              <FaFacebookSquare className="text-2xl text-amber-900" />
            </div>
            <div className="bg-btnColor h-10 w-10 flex items-center justify-center rounded-lg mb-3 mr-4">
              <FaLinkedin className="text-2xl text-amber-900" />
            </div>
            <div className="bg-btnColor h-10 w-10 flex items-center justify-center rounded-lg mb-3">
              <AiFillInstagram className="text-2xl text-amber-900" />
            </div>
          </div>
          <div className="flex items-center sm:justify-end justify-center w-full ">
            <AiOutlineCopyrightCircle className="text-2xl" />
            <h1 className="text-xs">2024 ALL RIGHTS RESERVED</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
