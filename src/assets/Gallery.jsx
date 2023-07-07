export default function Gallery(){

    function GalleryDivs(){

        return(
            <div className="gallery-image grid grid-rows-2 md:grid-cols-4 gap-4 p-4 place-content-center ">
          

                <div className="relative  max-w-xl ">
                    <img className="md:hidden" src="./imagelist/mobile/image-deep-earth.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-deep-earth.jpg" alt="404" className="hidden md:block filter brightness-75" />
                    <p className="text-2xl lg:text-3xl absolute bottom-3 left-5 md:bottom-6 left-5  max-w-0 uppercase tracking-widest">Deep Earth</p>
               </div>

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-night-arcade.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-night-arcade.jpg" alt="404" className="hidden md:block filter brightness-75" />
                    <p className="text-2xl lg:text-3xl absolute bottom-3 left-5 md:bottom-6 left-5 max-w-0 uppercase tracking-widest">Night Arcade</p>
               </div>

               <div className="relative  max-w-xl" >
                    <img className="md:hidden" src="./imagelist/mobile/image-soccer-team.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-soccer-team.jpg" alt="404" className="hidden md:block filter brightness-75 " />
                    <p className="text-2xl lg:text-3xl absolute  bottom-3 left-5 md:bottom-6 left-5  w-44 uppercase tracking-widest">Soccer Team VR</p>
               </div>

               
               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-grid.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-grid.jpg" alt="404" className="hidden md:block filter brightness-75" />
                    <p className="text-2xl lg:text-3xl absolute bottom-3 left-5 md:bottom-6 left-5  max-w-0 uppercase tracking-widest">The Grid</p>
               </div>

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-from-above.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-from-above.jpg" alt="404" className="hidden md:block filter brightness-75" />
                    <p className="text-2xl lg:text-3xl absolute bottom-3 left-5 md:bottom-6 left-5  max-w-1 uppercase tracking-widest">From Up Above VR</p>
                </div>
         

             

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-pocket-borealis.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-pocket-borealis.jpg" alt="404" className="hidden md:block filter brightness-75" />
                    <p className="text-2xl lg:text-3xl absolute bottom-3 left-5 md:bottom-6 left-5  max-w-0 uppercase tracking-widest">Pocket Borealis</p>
               </div>

               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-curiosity.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-curiosity.jpg" alt="404" className="hidden md:block filter brightness-75" />
                    <p className="text-2xl lg:text-3xl absolute bottom-3 left-5 md:bottom-6 left-5 0 max-w-0 uppercase tracking-widest">The Curiosity</p>
                </div>

                
               <div className="relative  max-w-xl">
                    <img className="md:hidden" src="./imagelist/mobile/image-fisheye.jpg" alt="404"/>
                    <img src="./imagelist/desktop/image-fisheye.jpg" alt="404" className="hidden md:block filter brightness-75" />
                    <p className="text-2xl lg:text-3xl absolute bottom-3 left-5 md:bottom-6 left-5  max-w-0 uppercase tracking-widest">The Fisheye</p>
               </div>

     
            </div>
        )
    }



    return(
        <section>
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between p-10 items-center">
                    <h2 className="text-center md:text-left font-light text-4xl tracking-wide">OUR CREATIONS</h2>
                    <button className="hidden md:block  lg:mt-0 border-2 border-black py-2 w-36 text-lg transition-colors hover:text-white hover:bg-black tracking-wide">SEE ALL</button>
                </div>

                <GalleryDivs />

                <div className="flex flex-col md:flex-row justify-between my-10 items-center md:hidden">
                    <button className="lg:mt-0 border-2 border-black py-2 w-36 text-lg transition-colors hover:text-white hover:bg-black tracking-wide">SEE ALL</button>
                </div>


            </div>

        </section>
    )
}