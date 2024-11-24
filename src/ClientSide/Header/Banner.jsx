import { IoLogoInstagram } from "react-icons/io";
import { TfiTwitter } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";
import BannerMain from "../../../public/bannerMain.png";
import BannerSupport from "../../../public/bannerSupport.png";
import Vector1 from "../../../public/vector1.png";
import Vector2 from "../../../public/vector2.png";
import Vector3 from "../../../public/vector3.png"; 

export default function Banner(){
    return(
        <> 
            <section className="mt-[75px]">
                <div className="w-[1152px] mx-auto mobileL:w-full mobileM:w-full mobileS:w-full laptop:w-full tablet:w-full">
                <div className="flex flex-row w-full gap-x-[12.2px] mobileL:flex-col mobileL:gap-y-[12.2px] mobileM:flex-col mobileM:gap-y-[12.2px] mobileS:flex-col mobileS:gap-y-[12.2px] tablet:flex-col tablet:gap-y-[12.2px]">
                    <div className="w-[510px] mt-[234px] mobileL:w-full mobileM:w-full mobileS:w-full laptop:w-[500px]">
                        <div className="w-[510px] mb-[69px] mobileL:w-full mobileM:w-full mobileS:w-full">
                            <h1 className=" font-david font-bold text-[70px] leading-[72px] text-[#101A24]">
                            We provide the 
                            best food for you
                            </h1>
                        </div>
                        <div className="w-[376px] min-h-[115px] max-h-auto mb-[18px] mobileS:w-full">
                            <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-[25px] mb-[94px]">
                            <div>
                                <button className="h-[54px] w-[120px] flex justify-center items-center text-[#FFFFFF] font-medium text-xl leading-[29px] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm bg-[#101A24] capitalize font-david shadow-xl shadow-[#00000026]">
                                    menu
                                </button>
                            </div>
                            <div>
                                <button className="h-[54px] w-[167px] flex justify-center items-center text-[#FFFFFF] font-david font-medium text-xl leading-[29px] bg-[#EA6D27] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm shadow-xl shadow-[#00000026]">
                                    Book a table
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-x-[17px] after:content-'' after:w-[143px] after:h-[1px] after:bg-[#000000] after:ml-[5px] after:opacity-[15%]">
                            <div className="h-[45px] w-[45px] rounded-full flex justify-center items-center border border-[#101A24] hover:cursor-pointer">
                            <TiSocialFacebook className="text-[#101A24] text-[29px]"/>
                            </div>
                            <div className="h-[45px] w-[45px] rounded-full flex justify-center items-center border border-[#101A24] hover:cursor-pointer">
                            <IoLogoInstagram className="text-[29px] text-[#101A24]"/>
                            </div>
                            <div className="h-[45px] w-[45px] rounded-full flex justify-center items-center border border-[#101A24] hover:cursor-pointer">
                            <TfiTwitter className="text-[#101A24] text-[29px]"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[652.1px] mobileL:w-full mobileL:overflow-hidden mobileM:w-full mobileM:overflow-hidden mobileS:w-full mobileS:overflow-hidden laptop:w-[500px]">
                        <div className="w-[652.1px] h-[935px] relative laptop:w-[500px] mobileL:w-full mobileM:w-full mobileS:w-full">
                        <div className="absolute w-[448px] h-[192px] top-[42.02px] left-[-59.2px] opacity-[20%]">
                            <img src={Vector1} alt="vectorImg" className="h-full w-full object-contain" />
                        </div>
                        <div className="absolute w-[315.27px] h-[299.11px] top-[7px] right-[-95.97px] opacity-[20%] laptop:right-[-10.97px]">
                            <img src={Vector2} alt="vectorImg" className="h-full w-full object-contain" />
                        </div>
                        <div className="absolute w-[252.57px] h-[342.73px] top-[467px] right-[-135.13px] opacity-[20%] laptop:right-[-11.13px] tablet:right-[-115.13px]">
                            <img src={Vector3} alt="vectorImg" className="h-full w-full object-contain" />
                        </div>
                            <div className="h-[712px] w-[516px] absolute top-[121px] right-[22.3px] laptop:w-[470px] mobileL:w-full mobileL:right-0 mobileM:w-full mobileM:right-0 mobileS:w-full">
                                <img src={BannerMain} alt="bannerMain" className="h-full w-full object-contain rounded-tl-[95px] rounded-tr-[35px] rounded-br-[95px] rounded-bl-[35px] laptop:object-cover mobileL:object-cover mobileM:object-cover mobileS:object-cover" />
                            </div>

                            <div className="h-[364px] w-[364px] absolute top-[456px] right-[389.3px] laptop:w-[300px] mobileL:top-0 mobileL:right-0 mobileL:h-[200px] mobileM:right-0 mobileM:top-0 mobileM:h-[150px] mobileS:top-0 mobileS:right-0 mobileS:h-[150px]">
                            <img src={BannerSupport} alt="bannerSupport" className="h-full w-full object-contain" />
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}