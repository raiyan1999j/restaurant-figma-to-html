
export default function Offer(){
    return(
        <>
            <section className="translate-y-[-252px]">
                <div className="w-[1152px] mx-auto bg-offerBg bg-cover pt-[96px] pb-[57px] rounded-3xl laptop:w-full tablet:w-full mobileL:w-full mobileM:w-full mobileS:w-full">
                    <div className="w-[739px] text-center mx-auto mb-[57px] mobileL:w-full mobileM:w-full mobileS:w-full">
                        <h2 className=" font-david font-bold text-[50px] leading-[58px] text-white">
                        Get Or Promo Code by
                        Subscribing To our  Newsletter
                        </h2>
                    </div>

                    <div className="w-[667px] h-[80px] relative mx-auto mobileL:w-full mobileM:w-full mobileS:w-full">
                        <div className="w-full h-full absolute top-0 left-0">
                            <input type="text" className="h-full w-full bg-white rounded-[20px] font-inter font-normal text-lg leading-[21.78px] text-[#101A24] placeholder:pl-[18px]" placeholder="Enter your email" />
                        </div>
                        <div className="h-[57px] w-[157px] absolute top-[11px] right-4">
                            <button className="h-full w-full bg-[#EA6D27] font-inter font-bold text-base leading-[58px] flex justify-center items-center rounded-[10px] text-white">
                            Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}