import { FaStar } from "react-icons/fa6";
import ClientPic1 from "../../../../public/clientPic1.png";
import ClientPic2 from "../../../../public/clientPic2.jpeg";
import ReviewVector1 from "../../../../public/reviewVector1.png";

export default function Review(){
    return(
        <>
            <section className="mx-auto bg-[#F3F4F4] overflow-hidden mt-[124px] relative">
            <div className="absolute h-[930.94px] w-[754.89px] translate-y-[94px] translate-x-[0px]">
                <img src={ReviewVector1} alt="reviewVector1" />
            </div>
                <div className="w-[1152px] mx-auto pt-[114px] mb-[68px] tablet:w-full mobileL:w-full mobileM:w-full mobileS:w-full">
                    <div className="w-[645px] mx-auto mb-[18px] mobileL:w-full mobileL:text-center mobileM:w-full mobileM:text-center mobileS:w-full mobileS:text-center">
                        <h2 className=" font-david font-bold text-6xl leading-[65px] text-[#101A24]">
                        Our Happy Customers
                        </h2>
                    </div>
                    <div className="w-[376px] text-center mx-auto mobileS:w-full">
                        <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        </p>
                    </div>
                </div>

                <div className="w-[1094px] ml-auto mobileS:w-full">
                    <div className="flex flex-row w-full gap-x-[117px] laptop:gap-x-12 tablet:gap-x-6">
                        <div className="w-[639px] flex flex-col">
                            <div className="h-[109px] w-[109px] rounded-full translate-y-[55px] translate-x-[265px] z-40">
                                <img src={ClientPic1} alt="clientPic" className="h-full w-full rounded-full object-contain"/>
                            </div>

                            <div className="w-[639px] bg-white rounded-tl-[130px] rounded-tr-[40px] rounded-br-[130px] rounded-bl-[40px] drop-shadow-2xl mobileS:w-full">
                                <div className="flex flex-row items-end w-[138px] h-[53px] gap-x-3 mt-9 ml-[198px] mb-[38px]">
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                </div>

                                <div className="w-[383px] text-center mx-auto mb-4">
                                    <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                                    </p>
                                </div>

                                <div className="w-[383px] mx-auto text-center pb-[41px]">
                                    <h4 className=" font-inter font-bold text-base leading-[29px] text-[#101A24]">
                                    Ama Ampomah
                                    </h4>
                                    <p className=" font-inter font-normal text-[15px] leading-[29px] text-[#5C6574]">
                                    CEO & Founder Inc 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[639px] flex flex-col">
                            <div className="h-[109px] w-[109px] rounded-full translate-y-[55px] translate-x-[265px] z-40">
                                <img src={ClientPic2} alt="clientPic" className="h-full w-full rounded-full object-cover"/>
                            </div>

                            <div className="w-[639px] bg-white rounded-tl-[130px] rounded-tr-[40px] rounded-br-[130px] rounded-bl-[40px] drop-shadow-2xl">
                                <div className="flex flex-row items-end w-[138px] h-[53px] gap-x-3 mt-9 ml-[198px] mb-[38px]">
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                    <span>
                                    <FaStar className="text-base font-black leading-[65px] text-[#FFBB00]"/>
                                    </span>
                                </div>

                                <div className="w-[383px] text-center mx-auto mb-4">
                                    <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                                    </p>
                                </div>

                                <div className="w-[383px] mx-auto text-center pb-[41px]">
                                    <h4 className=" font-inter font-bold text-base leading-[29px] text-[#101A24]">
                                    Kweku Annan
                                    </h4>
                                    <p className=" font-inter font-normal text-[15px] leading-[29px] text-[#5C6574]">
                                    CEO & Founder Inc 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[1094px] ml-auto mt-[117px] pb-[398px] mobileS:w-full">
                    <div className="flex flex-row gap-x-[27px] w-full pl-[258px] mobileS:pl-[78px]">
                        <span className="h-[7px] w-[7px] rounded-full bg-[#101A24]"></span>
                        <span className="h-[7px] w-[7px] rounded-full bg-[#EA6D27]"></span>
                        <span className="h-[7px] w-[7px] rounded-full bg-[#101A24]"></span>
                        <span className="h-[7px] w-[7px] rounded-full bg-[#101A24]"></span>
                        <span className="h-[7px] w-[7px] rounded-full bg-[#101A24]"></span>
                        <span className="h-[7px] w-[7px] rounded-full bg-[#101A24]"></span>
                    </div>
                </div>
            </section>
        </>
    )
}