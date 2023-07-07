export default function Info(){

    return(
        <section>
            <div className="relative flex flex-col my-8 mx-2 xl:flex-row lg:my-16 justify-center items-center">
                <div className="max-w-max">
                    <img className="hidden relative xl:left-24 xl:block w-auto" src="./imagelist/desktop/image-interactive.jpg" alt="404" />
                    <img className="block xl:hidden"src="./imagelist/mobile/image-interactive.jpg" alt="404" />

                </div>

                <div className="mt-4 info-text  lg:bg-white max-w-xl  p-2 text-center md:max-w-2xl xl:text-left lg:relative xl:top-28 xl:right-24 xl:p-10">
                    <h2 className="text-4xl md:text-5xl mb-2 ">THE LEADER IN INTERACTIVE VR</h2>
                    <p className="text-1xl text-gray-500">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </div>
        </section>
    )
}