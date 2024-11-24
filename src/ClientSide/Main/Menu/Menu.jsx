import Article from "./Article";
import SpecialDishes from "./SpecialDishes";
import MenuVector1 from "../../../../public/menuVector1.png";
import MenuVector2 from "../../../../public/menuVector2.png";
import MenuVector3 from "../../../../public/menuVector3.png";
import MenuVector4 from "../../../../public/menuVector4.png";
import MenuVector5 from "../../../../public/menuVector5.png";
import MenuVector6 from "../../../../public/menuVector6.png";
import MenuVector7 from "../../../../public/menuVector7.png";
import MenuVector8 from "../../../../public/menuVector8.png";

export default function Menu(){
    return(
        <>
        <section className="bg-[#f3f4f4] overflow-hidden relative">
        <div className="h-[224.2px] w-[212.7px] absolute translate-x-[320px] translate-y-[51px]">
            <img src={MenuVector1} alt="menuVectorImg" />
        </div>

        <div className="absolute h-[257.43px] w-[180.6px] translate-x-[974px] translate-y-[28px]">
            <img src={MenuVector2} alt="menuVectorImg" />
        </div>

        <div className="absolute h-[102.9px] w-[99.66px] translate-x-[389px] translate-y-[752px] opacity-[10%]">
            <img src={MenuVector3} alt="menuVectorImg" />
        </div>

        <div className="absolute h-[81.85px] w-[90.33px] translate-x-[1106px] translate-y-[782px]">
            <img src={MenuVector4} alt="menuVector4" />
        </div>

        <div className="absolute h-[124px] w-[118.51px] translate-x-[1224.69px] translate-y-[746px]">
            <img src={MenuVector5} alt="menuVectorImg" />
        </div>

        <div className="absolute h-[148.18px] w-[275.55px] translate-x-[647px] translate-y-[855px] opacity-[10%]">
            <img src={MenuVector6} alt="menuVectorImg" />
        </div>

        <div className="absolute h-[224.2px] w-[212.7px] translate-x-[895px] translate-y-[1089px]">
            <img src={MenuVector1} alt="menuVectorImg" />
        </div>

        <div className="absolute h-[81.85px] w-[90.33px] translate-x-[840px] translate-y-[1468px]">
            <img src={MenuVector4} alt="menuVector4" />
        </div>

        <div className="absolute h-[320.78px] w-[451.44px] translate-x-[1261px] translate-y-[1348px] opacity-[10%]">
             <img src={MenuVector7} alt="menuVectorImg" />
        </div>

        <div className="absolute h-[77.86px] w-[76.76px] translate-x-[970px] translate-y-[1566px]">
            <img src={MenuVector8} alt="menuVectorImg" />
        </div>
        <SpecialDishes/>
        <Article/>
        </section>
        </>
    )
}