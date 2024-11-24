import { ImFacebook } from "react-icons/im";
import MainLogo from "../../../public/mainLogo.png";
import { IoLogoInstagram } from "react-icons/io";
import { TfiTwitter } from "react-icons/tfi";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
            <section>
                <div className="w-[1152px] mx-auto border border-t-0 border-r-0 border-l-0 border-b-[#101A24]/20 pb-[47px] mobileL:w-full mobileM:w-full mobileS:w-full tablet:w-full">
                    <div className="flex flex-row flex-wrap mobileL:justify-between mobileL:gap-y-4 mobileM:justify-between mobileS:justify-between mobileS:gap-y-4">
                        <div className="w-[446px] mobileL:w-full mobileM:w-full mobileS:w-full">
                            <div className="h-[55px] w-[198px] mb-[21px]">
                                <img src={MainLogo} alt="pageLogo" className="h-full w-full object-contain" />
                            </div>

                            <div className="w-[408px] mb-5 mobileS:w-full mobileM:w-full mobileL:w-full">
                                <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .
                                <a href="#" className=" underline">Learn more</a>
                                </p>
                            </div>

                            <div>
                                <h4 className=" font-inter font-bold text-xs leading-10 mb-[15px]">
                                OPENING HOURS
                                </h4>
                                <div className="flex flex-row gap-x-[42px]">
                                    <div className="w-[149px]">
                                        <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                        Monday - Friday
                                        8:00 am to 9:00 pm
                                        </p>
                                    </div>

                                    <div className="w-[149px]">
                                        <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                        Saturday
                                        8:00 am to 9:00 pm
                                        </p>
                                    </div>

                                    <div className="w-[64px]">
                                        <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                        Sunday
                                        CLOSED
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[91px] ml-[77px] mobileL:ml-0 mobileM:ml-0 mobileS:ml-0">
                            <h2 className=" font-inter font-bold text-xs leading-10 text-[#101A24] uppercase">
                            Navigation
                            </h2>
                            
                            <ul className=" font-inter font-normal text-base leading-10 text-[#5C6574]">
                                <li>Menu</li>
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Main dishes</li>
                            </ul>
                        </div>

                        <div className="w-[127px] ml-[104px]">
                            <h2 className=" font-inter font-bold text-xs leading-10 text-[#101A24] uppercase">
                                dishes
                            </h2>
                            <ul className=" font-inter font-normal text-base leading-10 text-[#5C6574]">
                                <li>Fish & Viggies</li>
                                <li>Tofu Chili</li>
                                <li>Egg & Cucumber</li>
                                <li>Lumpia w/Suace</li>
                            </ul>
                        </div>

                        <div className="ml-[69px] mobileL:ml-0 mobileM:ml-0 mobileS:ml-0">
                            <h2 className=" font-inter font-bold text-xs leading-10 text-[#101A24] uppercase">
                            FOLLOW US
                            </h2>
                            <div className="flex flex-row gap-x-[14.69px]">
                                <span className="h-[38.88px] w-[38.88px] rounded-full flex justify-center items-center border border-[#101A24] hover:cursor-pointer">
                                <ImFacebook/>
                                </span>
                                <span className="h-[38.88px] w-[38.88px] rounded-full flex justify-center items-center border border-[#101A24] hover:cursor-pointer">
                                <IoLogoInstagram />
                                </span>
                                <span className="h-[38.88px] w-[38.88px] rounded-full flex justify-center items-center border border-[#101A24] hover:cursor-pointer">
                                <TfiTwitter />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[1152px] mx-auto pt-[35px] tablet:w-full mobileL:w-full mobileM:w-full mobileS:w-full">
                    <div className="flex flex-row w-full tablet:w-full tablet:flex-col mobileL:flex-col mobileL:w-full mobileM:w-full mobileM:flex-col mobileS:flex-col mobileS:w-full">
                    <div className="flex flex-row items-center">
                    <FaRegCopyright className="text-[#5C6574] mr-[10px]"/>
                        <h5 className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                        2022 Restaurants. All Right Reserved. Designed by <span className="font-bold"> Isaac</span>
                        </h5>
                    </div>

                    <div className="flex flex-row justify-between ml-[425px] w-[269px] tablet:ml-0 tablet:w-full mobileL:ml-0 mobileL:w-full mobileM:ml-0 mobileM:w-full mobileS:ml-0 mobileS:w-full">
                        <div>
                            <h5 className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                Terms of Service
                            </h5>
                        </div>
                        <div>
                            <h5 className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                Privacy Policy
                            </h5>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}