import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className=" w-full flex flex-row justify-center   bg-blue-950 h-48 ">


        <div className="mx-auto my-auto ">
            <h1 className=" text-slate-400  font-bold ">GetForm</h1>
            <p className=" mt-5  flex fex-row text-white text-xs"> Made With <FaHeart className="my-auto mx-1 text-red-400" /> from Istanbul</p>

            <div className=" flex mt-5  "> 
            <CiTwitter className="text-white " />
            <CiLinkedin className="text-white mx-2"/>
            < CiFacebook className="text-white"/>



            </div>
            
        </div>


        <div className="mx-auto my-auto">
            <h1 className="text-white">Platform</h1>
            <ul className=" text-xs text-slate-400">
                <li className="mt-2 ">Pricing</li>
                <li className="my-2 ">Help Center</li>
                <li className="">Contact Us</li>

            </ul>
        </div>


        <div className="mx-auto  my-auto">

            <h1 className="text-white">Company</h1>
            <ul className=" text-xs text-slate-400">
                <li className="mt-2">About Us</li>
                <li className="my-2 ">Terms and Conditions</li>
                <li className=" ">Privacy Policy</li>

            </ul>



        </div>







    </footer>

    </>
  )
}

export default Footer