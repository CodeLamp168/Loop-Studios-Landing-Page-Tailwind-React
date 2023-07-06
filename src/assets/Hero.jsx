

export default function Hero(){

    function Header(){

        return(
            <nav>
                <img src="./imagelist/logo.svg" alt="404" />
    
                <div>
                    <ul>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Events</a>
                        <a href="#">Products</a>
                        <a href="#">Support</a>
                    </ul>
                </div>
            </nav>
        )
    }


    function HeroText(){



        return(

            <div>
                <h3>IMMERSIVE EXPERIENCES THAT DELIVER</h3>
            </div>
        )
    }





    return(
        <section>
         <Header/>
         <HeroText/>
        </section>
    )
}