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
      <div className="flex flex-wrap my-10">
        <img
          src="https://etimg.etb2bimg.com/photo/94574823.cms"
          alt=""
          className="flex-1 h-44 w-40"
        />
        <img
          src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg"
          alt=""
          className="flex-1 h-44 w-40"
        />
        <img
          src="https://assets.architecturaldigest.in/photos/60083ed208ae763b9ae8542d/16:9/w_2560%2Cc_limit/fermented-coffee-beverage-brew-1366x768.jpg"
          alt=""
          className="flex-1 h-44 w-40"
        />
        <img
          src="https://static01.nyt.com/images/2023/09/22/well/6ASKWELL-COFFEE2/6ASKWELL-COFFEE2-videoSixteenByNine3000.jpg"
          alt=""
          className="flex-1 h-44 w-40"
        />
        <img
          src="https://www.thoughtco.com/thmb/WTEoR9nLlgMnyfnU-BAeNoWVMA8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-936840910-5c8ea8b2c9e77c0001ff0ae6.jpg"
          alt=""
          className="flex-1 h-44 w-40"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/62b2d48ec03ae427482608b6/1660824872136-SFS3GKUZXDL7RGKTT7IX/Screenshot+2022-08-18+at+13.12.35.png"
          alt=""
          className="flex-1 h-44 w-40"
        />
        <img
          src="https://www.eatingwell.com/thmb/EOj3EiaNAHNkL61sI_OsWL0l6xg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-843878420_1_960px-a31a820c7c3e4daab58d31a67de17908.jpg"
          alt=""
          className="flex-1 h-44 w-40"
        />
        <img src="https://ift.tt/2vjzoRA" alt="" className="flex-1 h-44 w-40" />
      </div>
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
