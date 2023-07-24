import React, { useState } from 'react';

export default function Hero(){

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
      setIsNavVisible(!isNavVisible);
    };

    function Hamburger({ toggleNav }) {
        return (
          <>
            <img className="hamburger-btn cursor-pointer sm:hidden transition-transform hover:scale-125" src="./imagelist/icon-hamburger.svg" alt="404" onClick={toggleNav}/>
          </>
        );
      }
      
      function NavHeader({ isNavVisible, toggleNav }) {
        return (
          <nav className={`${ isNavVisible ? "" : "hidden" } bg-black flex flex-col justify-start items-start fixed w-screen z-10 top-0 left-0 p-8 h-full sm:hidden`}>
            <div className="flex flex-rows items-center justify-between w-full">
              <img src="./imagelist/logo.svg" alt="404" />
              <img className="close-btn cursor-pointer transition-transform hover:scale-125" src="./imagelist/icon-close.svg" alt="404" onClick={toggleNav}/>
            </div>
      
            <div>
              <ul className="flex flex-col text-1xl my-20">
                <a className="nav-text my-4 text-2xl" href="#">
                  About
                </a>
                <a className="nav-text my-4 text-2xl" href="#">
                  Careers
                </a>
                <a className="nav-text my-4 text-2xl" href="#">
                  Events
                </a>
                <a className="nav-text my-4 text-2xl" href="#">
                  Products
                </a>
                <a className="nav-text my-4 text-2xl" href="#">
                  Support
                </a>
              </ul>
            </div>
          </nav>
        );
      }

    function Header(){

        return(
            <nav className="flex flex-row justify-between items-center">
                <img src="./imagelist/logo.svg" alt="404" />
                <Hamburger toggleNav={toggleNav}/>
    
                <div className="hidden sm:block">
                    <ul className="flex flex-row text-1xl">
                        <a className="nav-text m-2 " href="#">About</a>
                        <a className="nav-text m-2" href="#">Careers</a>
                        <a className="nav-text m-2" href="#">Events</a>
                        <a className="nav-text m-2" href="#">Products</a>
                        <a className="nav-text m-2" href="#">Support</a>
                    </ul>
                </div>
            </nav>

            

            
        )
    }


    function HeroText(){

        return(

            <div className="max-w-lg border-4 border-white mt-32 p-4 text-4xl md:md:p-10 md:m-32 md:mx-0 md:text-6xl">
                <h3 className="hero-text">IMMERSIVE EXPERIENCES THAT DELIVER</h3>
            </div>
        )
    }





    return(
        <section className="bg-[url('/image-hero-mobile.jpg')] sm:bg-[url('/image-hero-desktop.jpg')] hero-sec h-auto bg-center sm:bg-top">
          <div className="hero-container relative max-w-6xl mx-auto px-6 py-12">
             <Header/>
             <NavHeader isNavVisible={isNavVisible} toggleNav={toggleNav}/>
             <HeroText/>
          </div>
        </section>
    )
}