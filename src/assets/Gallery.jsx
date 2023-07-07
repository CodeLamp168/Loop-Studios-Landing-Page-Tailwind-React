export default function Gallery(){

    function GalleryDivs(){

        return(
            <div className="gallery-image grid grid-rows-2 md:grid-cols-4 gap-4 p-4 place-content-center">
                <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-curiosity.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-curiosity.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3 0 max-w-0 uppercase tracking-widest">The Curiosity</p>
                </div>

                <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-deep-earth.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-deep-earth.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3  max-w-0 uppercase tracking-widest">The Deep Earth</p>
               </div>

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-fisheye.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-fisheye.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3  max-w-0 uppercase tracking-widest">The Fisheye</p>
                    </div>
               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-from-above.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-from-above.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3  max-w-0 uppercase tracking-widest">From Above</p>
                </div>

                <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-grid.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-grid.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3  max-w-0 uppercase tracking-widest">The Grid</p>
               </div>

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-night-arcade.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-night-arcade.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3 max-w-0 uppercase tracking-widest">Night Arcade</p>
               </div>

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-pocket-borealis.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-pocket-borealis.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl absolute bottom-2 left-3  max-w-0 uppercase tracking-widest">Pocket Borealis</p>
               </div>

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-soccer-team.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-soccer-team.jpg" alt="404" className="hidden md:block" />
                    <p className="text-2xl md:text-3xl absolute bottom-2 left-3  max-w-0 uppercase tracking-widest">Soccer Team</p>
               </div>
            </div>
        )
    }



    return(
        <section>
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between p-10 items-center">
                    <h2 className="text-center md:text-left font-light text-4xl tracking-wide">OUR CREATIONS</h2>
                    <button className="mt-6 lg:mt-0 border-2 border-black py-2 w-36 text-lg transition-colors hover:text-white hover:bg-black">SEE ALL</button>
                </div>

                <GalleryDivs />


            </div>

        </section>
    )
}