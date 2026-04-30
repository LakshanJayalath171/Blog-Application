import { FaFacebookSquare,FaLinkedin,FaTelegram,FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const SmallFooter = () => {
  return (
    <div className="bg-[#03132D] pb-6">
        <div className="flex items-center justify-center w-screen h-full ">
          <div className="flex items-center justify-center gap-4 mt-24 mb-6">
            <FaFacebookSquare className="text-4xl text-blue-50"/>
            <FaLinkedin className="text-4xl text-blue-50"/>
            <FaTelegram className="text-4xl text-blue-50"/>
            <FaWhatsappSquare className="text-4xl text-blue-50"/>
            <IoIosMail className="text-4xl text-blue-50"/>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="text-center">
                <p className="poppins-semibold text-white">Learn Stack © 2026.</p>
                <p className="poppins-light text-white">Sharing knowledge, building skills, and growing together in tech.</p>
            </div>
        </div>
    </div>
  )
}

export default SmallFooter