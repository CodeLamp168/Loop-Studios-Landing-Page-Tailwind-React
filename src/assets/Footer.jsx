
export default function Footer(){

    function FooterNav(){

        return(
            <nav>
                <img src="./imagelist/logo.svg" alt="404" />
    
                <div>
                    <ul className="flex flex-col md:flex-row items-center my-6 md:my-0">
                        <a className="my-4" href="#">About</a>
                        <a className="my-4 md:px-4" href="#">Careers</a>
                        <a className="my-4 md:px-4" href="#">Events</a>
                        <a className="my-4 md:px-4" href="#">Products</a>
                        <a className="my-4 md:px-4" href="#">Support</a>
                    </ul>
                </div>
            </nav>
        )
    }

    function FooterLinks(){

        return(
            <div> 
                <ul className="flex flex-row justify-center md:justify-end">
                    <img className="px-2 cursor-pointer" src="./imagelist/icon-facebook.svg" alt="404" />
                    <img className="px-2 cursor-pointer" src="./imagelist/icon-twitter.svg" alt="404" />
                    <img className="px-2 cursor-pointer" src="./imagelist/icon-pinterest.svg" alt="404" />
                    <img className="px-2 cursor-pointer" src="./imagelist/icon-instagram.svg" alt="404" />
                </ul>
                <p className="text-gray-400 mt-5">© 2021 Loopstudios. All rights reserved.</p>
            </div>
        )
    }


    return(
        <section className="flex flex-col md:flex-row md:justify-between items-center bg-black text-white py-12 md:py-6 md:px-12 md:mt-6">
            <FooterNav/>
            <FooterLinks/>
        </section>
        
    )
}