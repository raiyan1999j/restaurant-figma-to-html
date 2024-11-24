import ArticleImg from "../../../../public/articleImg.png";
import Leaf1 from "../../../../public/leaf1.png";
import Leaf2 from "../../../../public/leaf2.png";
import Leaf3 from "../../../../public/leaf3.png";

export default function Article(){
    return(
        <>
            <div className="w-[1152px] mx-auto mt-[156px] pb-[331px] tablet:w-full mobileL:w-full mobileM:w-full mobileS:w-full">
                <div className="grid grid-cols-[719px_520px] gap-x-[46px] laptop:gap-x-0 tablet:grid-cols-1 tablet:gap-y-[46px] mobileL:grid-cols-1 mobileM:grid-cols-1 mobileS:grid-cols-1">
                    <div className="relative w-[719px] h-[667px] mobileL:w-full mobileM:w-full mobileS:w-full">
                        <div className="absolute h-full w-full">
                            <img src={ArticleImg} alt="articleImg" className="h-full w-full object-contain" />
                        </div>
                        <span className="absolute h-[129px] w-[194px] top-[99px] left-[574px]">
                            <img src={Leaf1} alt="leaf1" className="h-full w-full object-contain" />
                        </span>

                        <span className="absolute h-[133px] w-[209px] top-[540px] left-[72px]">
                            <img src={Leaf2} alt="leaf2" className="h-full w-full object-contain" />
                        </span>

                        <span className="absolute h-[189px] w-[91px] top-[201px] lef-[9px]">
                            <img src={Leaf3} alt="leaf3" className="h-full w-full object-contain"/>
                        </span>
                    </div>

                    <div className=" translate-y-[228px] tablet:translate-y-[0px]">
                        <div className="w-[520px] mb-[30px] tablet:w-full mobileM:w-full mobileS:w-full">
                            <h2 className=" font-david font-bold text-6xl leading-[65px] text-[#101A24]">
                                Welcome to our restaurant
                            </h2>
                        </div>
                        <div className="w-[376px] min-h-[115px] max-h-auto mobileM:w-full mobileS:w-full">
                            <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-[25px]">
                            <div>
                                <button className="h-[54px] w-[120px] flex justify-center items-center text-[#FFFFFF] font-david font-medium text-xl leading-[29px] bg-[#101A24] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm shadow-xl shadow-[#00000026]">
                                    Menu
                                </button>
                            </div>
                            <div>
                                <button className="h-[54px] w-[167px] flex justify-center items-center text-[#FFFFFF] font-david font-medium text-xl leading-[29px] bg-[#EA6D27] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm shadow-xl shadow-[#00000026]">
                                    Book a table
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}