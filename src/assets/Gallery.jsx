export default function Gallery(){

    function GalleryDivs(){

        function GalleryImg({gallerySrcMobile, gallerySrcDesktop, text}){

            return(
              <div className="relative  max-w-xl ">
                <img className="md:hidden" src={gallerySrcMobile} alt="404"/>
                <img src={gallerySrcDesktop} alt="404" className="hidden md:block filter brightness-75" />
                <p className="text-2xl   lg:text-3xl xl:text-4xl absolute bottom-3 left-5 md:bottom-6 left-5   uppercase tracking-widest">{text}</p>
              </div>
            )
        }

        return(
            <div className="gallery-image grid grid-rows-2 md:grid-cols-4 gap-4 p-4 place-content-center ">
          

              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-deep-earth.jpg'} gallerySrcDesktop={'./imagelist/desktop/image-deep-earth.jpg'} text={"Deep Earth"}/>
              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-night-arcade.jpg'}  gallerySrcDesktop={'./imagelist/desktop/image-night-arcade.jpg'} text={"Night Arcade"}/>
              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-soccer-team.jpg'}  gallerySrcDesktop={'./imagelist/desktop/image-soccer-team.jpg'} text={"Soccer Team VR"}/>
              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-grid.jpg'}  gallerySrcDesktop={'./imagelist/desktop/image-grid.jpg'} text={"The Grid"}/>
              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-from-above.jpg'}  gallerySrcDesktop={'./imagelist/desktop/image-from-above.jpg'} text={"From Up Above VR"}/>
              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-pocket-borealis.jpg'}  gallerySrcDesktop={'./imagelist/desktop/image-pocket-borealis.jpg'} text={"Pocket Borealis"}/>
              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-curiosity.jpg'}  gallerySrcDesktop={'./imagelist/desktop/image-curiosity.jpg'} text={"The Curiosity"}/>
              <GalleryImg gallerySrcMobile={'./imagelist/mobile/image-fisheye.jpg'}  gallerySrcDesktop={'./imagelist/desktop/image-fisheye.jpg'} text={"The Fisheye"}/>

     
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