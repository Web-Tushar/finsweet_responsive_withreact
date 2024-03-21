import { FaBars } from "react-icons/fa6";
import './Button'
import Button from "./Button";


function App() {

  return (
    <>
    { /* ==navbar start here */ }

    <nav className="bg-[#1C1D28] py-[5px] px-[3px]">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <div >
          <img src="./images/Logo.png" alt="not_found" />
        </div>
        <div className=" w-[60%] text-center  hidden md:block">
          <ul className="flex justify-between  px-[60px] text-white "> 
            <li>Home</li>
            <li>About us</li>
            <li>Sermon</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="text-right text-[28px] text-white block md:hidden">
          < FaBars /></div>

        <div className=" text-right hidden md:block">

          <Button  title="Contact us"/>
        </div>

      </div>

    </nav>
    {/* ==navbar end here */}
    
    {/* banner part start here */}
    <section className="py-[128px] bg-banner bg-cover 	bg-no-repeat bg-center px-[10px]">
      <div className="max-w-container mx-auto">
        <div className="banner_wrapper">
          <div className="md:w-[592px]">
            <p className="sm:font-bold text-white text-[16px] sm:text-[20px] uppercase">Welcome to our CHURCH</p>
            <h1 className="text-white font-bold md:w-[592px] xs:w-[350px] sm:w-[400px] xs:text-[25px] sm:text-[40px]  md:text-[64px] uppercase tracking-tight md:leading-[82px]  ">Become a part of our community</h1>

            <Button title="tushar" btn="two"/>
            <p className=" pl-[30px] mt-16 text-primary font-bold xs:w-[260px] relative after:absolute after:w-[18px] after:h-[2px] after:content-[''] after:bg-primary after:top-[12px] after:left-[0] md:w-[338px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          </div>

        </div>

      </div>

    </section>

    {/* banner part start here */}



  
  
    </>
  )
}

export default App
