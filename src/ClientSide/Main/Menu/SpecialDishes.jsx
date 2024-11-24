import Dish1 from "../../../../public/dish1.png";
import Dish2 from "../../../../public/dish2.png";
import Dish3 from "../../../../public/dish3.png";
import Dish4 from "../../../../public/dish4.png";

export default function SpecialDishes(){
    return(
        <>
            <div className="w-[1152px] mx-auto pt-[92px] laptop:w-full  tablet:w-full mobileL:w-full mobileM:w-full mobileS:w-full">
                <div className="w-full text-center mb-[21px]">
                    <h2 className="font-david font-bold text-[60px] leading-[67px] text-[#101A24]">
                    Our Special Dishes
                    </h2>
                </div>
                <div className="w-[376px] mx-auto mb-[69px]">
                    <p className="font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    </p>
                </div>
            </div>

            <div className="w-[1152px] mx-auto laptop:w-full tablet:w-full mobileL:w-full mobileM:w-full mobileS:w-full">
                <div className="grid grid-cols-[repeat(4,_265px)] gap-x-[30px] laptop:grid-cols-2 tablet:grid-cols-2 mobileL:grid-cols-1 mobileM:grid-cols-1 mobileS:grid-cols-1">
                    <div className="flex flex-col items-center hover:cursor-pointer hover:z-30 group">
                        <div className="relative h-[207px] w-[207px] translate-y-[102px]">
                            <div className="absolute h-full w-full">
                                <img src={Dish1} alt="dish1" className="h-full w-full object-contain" />
                            </div>

                            <div className="absolute h-[54px] w-[54px] rounded-full bg-[#101A24] flex justify-center items-center top-[47px] left-[180px]">
                                <p className="text-[#FFFFFF]">
                                    $12
                                </p>
                            </div>
                        </div>

                        <div className="w-[265px] border-2 border-[#FFFFFF] rounded-tl-[72px] rounded-tr-[15px] rounded-br-[72px] rounded-bl-[15px] group-hover:bg-white">
                            <div className="w-[225px] pt-[141px] pb-[51px] mx-auto text-center">
                                <h2 className=" font-david font-bold text-xl leading-6 text-[#101A24] mb-[21px]">
                                Lumpia with Suace
                                </h2>
                                <p className=" font-inter font-normal text-[15px] leading-6 text-[#5C6574]">
                                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center hover:cursor-pointer group">
                        <div className="relative h-[207px] w-[207px] translate-y-[102px]">
                            <div className="absolute h-full w-full">
                                <img src={Dish2} alt="dish2" className="h-full w-full object-contain" />
                            </div>

                            <div className="absolute h-[54px] w-[54px] rounded-full bg-[#101A24] flex justify-center items-center top-[47px] left-[180px]">
                                <p className="text-[#FFFFFF]">
                                    $12
                                </p>
                            </div>
                        </div>

                        <div className="w-[265px] border-2 border-[#FFFFFF] rounded-tl-[72px] rounded-tr-[15px] rounded-br-[72px] rounded-bl-[15px] group-hover:bg-white">
                            <div className="w-[225px] pt-[141px] pb-[51px] mx-auto text-center">
                                <h2 className=" font-david font-bold text-xl leading-6 text-[#101A24] mb-[21px]">
                                Fish and Veggie
                                </h2>
                                <p className=" font-inter font-normal text-[15px] leading-6 text-[#5C6574]">
                                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center hover:cursor-pointer group">
                        <div className="relative h-[207px] w-[207px] translate-y-[102px]">
                            <div className="absolute h-full w-full">
                                <img src={Dish3} alt="dish3" className="h-full w-full object-contain" />
                            </div>

                            <div className="absolute h-[54px] w-[54px] rounded-full bg-[#101A24] flex justify-center items-center top-[47px] left-[180px]">
                                <p className="text-[#FFFFFF]">
                                    $12
                                </p>
                            </div>
                        </div>

                        <div className="w-[265px] border-2 border-[#FFFFFF] rounded-tl-[72px] rounded-tr-[15px] rounded-br-[72px] rounded-bl-[15px] group-hover:bg-white">
                            <div className="w-[225px] pt-[141px] pb-[51px] mx-auto text-center">
                                <h2 className=" font-david font-bold text-xl leading-6 text-[#101A24] mb-[21px]">
                                Tofu Chili
                                </h2>
                                <p className=" font-inter font-normal text-[15px] leading-6 text-[#5C6574]">
                                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center hover:cursor-pointer group">
                        <div className="relative h-[207px] w-[207px] translate-y-[102px]">
                            <div className="absolute h-full w-full">
                                <img src={Dish4} alt="dish4" className="h-full w-full object-contain" />
                            </div>

                            <div className="absolute h-[54px] w-[54px] rounded-full bg-[#101A24] flex justify-center items-center top-[47px] left-[180px]">
                                <p className="text-[#FFFFFF]">
                                    $12
                                </p>
                            </div>
                        </div>

                        <div className="w-[265px] border-2 border-[#FFFFFF] rounded-tl-[72px] rounded-tr-[15px] rounded-br-[72px] rounded-bl-[15px] group-hover:bg-white">
                            <div className="w-[225px] pt-[141px] pb-[51px] mx-auto text-center">
                                <h2 className=" font-david font-bold text-xl leading-6 text-[#101A24] mb-[21px]">
                                Egg and Cocumber
                                </h2>
                                <p className=" font-inter font-normal text-[15px] leading-6 text-[#5C6574]">
                                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}