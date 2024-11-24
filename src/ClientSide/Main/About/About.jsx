import Chef from "../../../../public/chef.png";
import AboutVector1 from "../../../../public/aboutVector1.png";
import AboutVector2 from "../../../../public/aboutVector2.png";
import { FaCircleCheck } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <section className="mt-[126px] relative">
        <div className="absolute h-[172.15px] w-[190px] translate-x-[0px] translate-y-[32px] opacity-[10%]">
          <img src={AboutVector1} alt="aboutVectorImg" />
        </div>

        <div className="absolute h-[303.43px] w-[290px] translate-x-[91px] translate-y-[-70.43px] mobileS:w-[228px] ">
          <img src={AboutVector2} alt="aboutVectorImg" className="h-full w-full object-contain" />
        </div>

        <div className="w-[1152px] mx-auto laptop:w-full tablet:w-full mobileL:w-full mobileM:w-full mobileS:w-full">
          <div className="flex flex-row w-full tablet:flex-col tablet:items-center mobileL:flex-col mobileL:items-center mobileM:flex-col mobileM:items-center mobileS:flex-col mobileS:items-center">
            <div className="w-[520px] translate-y-[89px] mobileL:w-full mobileM:w-full mobileS:w-full">
              <h2 className="mb-[18px] font-david font-bold text-6xl leading-[65px] text-[#101A24]">
                Our Expects Chef
              </h2>
              <div className="w-[376px] min-h-[15px] max-h-auto mb-[25px] mobileS:w-full">
                <p className=" font-inter font-normal text-base leading-[29px] text-[#5C6574]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(2,_292.56px)] gap-x-[14.88px] gap-y-[33px] translate-x-[-6px] mb-[42px] mobileL:grid-cols-1 mobileL:pl-4 mobileM:grid-cols-1 mobileM:pl-4 mobileS:pl-4 mobileS:grid-cols-1">
                <div className="flex flex-row gap-x-[9.92px] items-center">
                  <div>
                    <FaCircleCheck className="text-[#EA6D27] text-2xl"/>
                  </div>
                  <div>
                    <p className=" font-inter font-normal text-[15px] leading-[21px] text-[#5C6574]">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-x-[9.92px] items-center">
                  <div>
                    <FaCircleCheck className="text-[#EA6D27] text-2xl"/>
                  </div>
                  <div>
                    <p className="font-inter font-normal text-[15px] leading-[21px] text-[#5C6574]">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-x-[9.92px] items-center">
                  <div>
                    <FaCircleCheck className="text-[#EA6D27] text-2xl"/>
                  </div>
                  <div>
                    <p className=" font-inter font-normal text-[15px] leading-[21px] text-[#5C6574]">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-x-[9.92px] items-center">
                  <div>
                    <FaCircleCheck className="text-[#EA6D27] text-2xl"/>
                  </div>
                  <div>
                    <p className="font-inter font-normal text-[15px] leading-[21px] text-[#5C6574]">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-x-[9.92px] items-center">
                  <div>
                    <FaCircleCheck className="text-[#EA6D27] text-2xl"/>
                  </div>
                  <div>
                    <p className=" font-inter font-normal text-[15px] leading-[21px] text-[#5C6574]">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-x-[9.92px] items-center">
                  <div>
                    <FaCircleCheck className="text-[#EA6D27] text-2xl"/>
                  </div>
                  <div>
                    <p className="font-inter font-normal text-[15px] leading-[21px] text-[#5C6574]">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-x-[25px] mobileS:gap-x-[15px]">
                <div className="ml-[51px] mobileS:ml-0">
                    <button className="h-[54px] w-[120px] bg-[#101A24] flex justify-center items-center font-david font-medium text-xl leading-[29px] text-[#FFFFFF] rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md shadow-xl shadow-[#00000026]">
                        Menu
                    </button>
                </div>
                <div>
                    <button className="w-[167px] h-[54px] bg-[#EA6D27] flex justify-center items-center text-[#FFFFFF] font-david font-medium text-xl leading-[29px] rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md shadow-xl shadow-[#00000026]">
                        Book a table
                    </button>
                </div>
              </div>
            </div>

            <div className="w-[507px] ml-[119px] laptop:ml-0 tablet:mt-[119px] mobileL:mt-[119px] mobileL:w-full mobileL:ml-0 mobileM:ml-0 mobileM:w-full mobileS:w-full mobileS:ml-0">
              <div className="w-[507px] h-[695px] mobileL:w-full mobileM:w-full mobileS:w-full">
                <img src={Chef} alt="chef" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
