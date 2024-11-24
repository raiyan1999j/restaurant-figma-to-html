import { RiMenu3Line } from "react-icons/ri";
import MainLogo from "../../../public/mainLogo.png";
import { MdRestaurantMenu } from "react-icons/md";

export default function Navbar(){
    return(
        <>
            <section className="">
                <nav className="w-[1152px] mx-auto laptop:w-full mobileL:hidden mobileM:hidden mobileS:hidden tablet:hidden">
                    <div className="flex flex-row w-full">
                        <div className="mr-[161px] mt-[56px] laptop:mr-[87px]">
                            <div className="w-[198px] h-[55px]">
                                <img src={MainLogo} alt="mainLogo" className="h-full w-full" />
                            </div>
                        </div>

                        <div className="mr-[192px] mt-[82px] laptop:mr-[139px]">
                            <ul className="flex flex-row font-inter font-normal text-base leading-[29px] text-[#101A24] capitalize gap-x-[45px]">
                                <li>main</li>
                                <li>events</li>
                                <li>gallery</li>
                                <li>about</li>
                                <li>contact</li>
                            </ul>
                        </div>

                        <div className="mt-[63px]">
                            <button className="w-[167px] h-16 flex justify-center items-center bg-[#EA6D27] text-white font-david font-medium text-xl leading-[29px] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm shadow-xl shadow-[#00000026]">
                                Book a table
                            </button>
                        </div>
                    </div>
                </nav>
            </section>

            <section className="hidden mobileL:block mobileM:block mobileS:block tablet:block">
                <div className="w-full">
                    <div className="flex flex-row w-full justify-between items-center">
                        <div>
                        <div className="w-[198px] h-[55px]">
                                <img src={MainLogo} alt="mainLogo" className="h-full w-full" />
                        </div>
                        </div>

                        <div className="translate-y-1 group transition-all duration-150 ease-linear relative">
                        <RiMenu3Line className=" text-3xl text-[#EA6D27] transition-all duration-150 ease-out group-hover:hidden"/>
                        <MdRestaurantMenu className="hidden text-3xl text-[#EA6D27] group-hover:block transition-all duration-200 ease-in" />

                        <div className="opacity-0 group-hover:block group-hover:opacity-100 absolute right-0 transition-opacity duration-150 ease-linear w-[250px] bg-white drop-shadow-2xl rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md">
                <ul className="flex flex-col font-inter font-normal text-base leading-[29px] text-[#101A24] capitalize gap-y-[15px] items-end pr-9 ">
                                <li>main</li>
                                <li>events</li>
                                <li>gallery</li>
                                <li>about</li>
                                <li>contact</li>
                                <li>
                                <button className="w-[167px] h-16 flex justify-center items-center bg-[#EA6D27] text-white font-david font-medium text-xl leading-[29px] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm shadow-xl shadow-[#00000026]">
                                Book a table
                                </button>
                                </li>
                            </ul>
                </div>
                        </div>
                    </div>
                </div>

                
            </section>
        </>
    )
}