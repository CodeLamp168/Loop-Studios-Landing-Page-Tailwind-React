export default function Gallery(){

    function GalleryDivs(){

        return(
            <div className="gallery-image grid grid-rows-2 md:grid-cols-4 gap-4 p-4 place-content-center">
                <div className="relative border-4 border-red-500 max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-curiosity.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-curiosity.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3 border-2 border-red-500 max-w-0 uppercase tracking-widest">The Curiosity</p>
                </div>
    
    
            </div>
        )
    }



    return(
        <section>
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col lg:flex-row justify-between p-10 items-center">
                    <h2 className="text-center md:text-left font-light text-4xl tracking-wide">OUR CREATIONS</h2>
                    <button className="mt-6 lg:mt-0 border-2 border-black py-2 w-36 text-lg transition-colors hover:text-white hover:bg-black">SEE ALL</button>
                </div>

                <GalleryDivs />


            </div>

        </section>
    )
}