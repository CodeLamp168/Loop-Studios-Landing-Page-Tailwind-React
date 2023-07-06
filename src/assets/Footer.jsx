
export default function Footer(){

    function FooterNav(){

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

    function FooterLinks(){

        return(
            <div>
                <ul>
                    <i>img</i>
                    <i>img</i>
                    <i>img</i>
                    <i>img</i>
                </ul>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
        )
    }


    return(
        <section>
            <FooterNav/>
            <FooterLinks/>
        </section>
        
    )
}