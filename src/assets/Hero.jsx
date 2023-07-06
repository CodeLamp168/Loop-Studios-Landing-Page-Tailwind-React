

export default function Hero(){

    function Header(){

        return(
            <nav className="flex flex-row justify-between items-center">
                <img src="./imagelist/logo.svg" alt="404" />
    
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
        <section className="hero-sec border-4 border-purple-500 h-auto bg-center sm:bg-top">
          <div className="hero-container max-w-6xl mx-auto px-6 py-12">
             <Header/>
             <HeroText/>
          </div>
        </section>
    )
}