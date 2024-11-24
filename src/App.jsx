import Footer from "./ClientSide/Footer/Footer";
import Banner from "./ClientSide/Header/Banner";
import Navbar from "./ClientSide/Header/Navbar";
import About from "./ClientSide/Main/About/About";
import Menu from "./ClientSide/Main/Menu/Menu";
import Offer from "./ClientSide/Main/Offer/Offer";
import Review from "./ClientSide/Main/Review/Review";

export default function App(){
  return(
    <>
      <header>
      <div className="h-[960px] w-[960px] border border-[#101A2433] absolute top-[-452px] left-[-538px] rounded-full mobileL:hidden mobileM:hidden mobileS:hidden"></div>
      <div className="h-[960px] w-[960px] border border-[#101A2433] absolute top-[-502px] left-[-481px] rounded-full mobileL:hidden mobileM:hidden mobileS:hidden"></div>
      <div className="h-[960px] w-[960px] border border-[#101A2433] absolute top-[-428px] left-[-450px] rounded-full mobileL:hidden mobileM:hidden mobileS:hidden"></div>
       <Navbar/>
       <Banner/>
      </header>

      <main>
        <Menu/>
        <About/>
        <Review/>
        <Offer/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}