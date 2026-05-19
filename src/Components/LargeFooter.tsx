import { phone } from "../assets/assest"
import ReButton from "./ReButton"


const LargeFooter = () => {
  return (
    <div className="w-screen h-74 bg-[#03132D] flex relative">
        <div className="flex-1 items-center justify-center w-full h-full pt-24 pl-8">
            <h1 className="poppins-bold md:text-2xl text-white">Subscribe to our newsletter to recieve daily news.</h1>
            <p className="poppins-light text-white">Learn Stack © 2026.<br/>
               Sharing knowledge, building skills, and growing together in tech.
            </p>
            <div className="flex ">
                <div className="bg-white w-72 h-8 md:w-96 md:h-10 m-4 mx-2 ml-0 rounded-3xl flex items-center justify-between gap-4">
                  <input placeholder="Enter Your Email" className="p-3 poppins-semibold text-gray-600 outline-none" type="email"></input>
                </div>
                <div className="my-2">
                    <ReButton text={'Subscribe'}/>
                </div>
            </div>
            
        </div>

        <div className="absolute -top-28 right-1/12 rotate-12">
            <img src={phone} alt="mobile" className="w-56 h-96 hidden lg:block"/>
        </div>
    </div>
  )
}

export default LargeFooter