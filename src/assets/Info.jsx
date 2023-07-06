export default function Info(){

    return(
        <section className="border-4 border-indigo-500">
            <div className="relative flex flex-col my-8 mx-2 xl:flex-row lg:my-16 justify-center items-center">
                <div className="max-w-max">
                    <img className="hidden xl:block w-auto" src="./imagelist/desktop/image-interactive.jpg" alt="404" />
                    <img className="block xl:hidden"src="./imagelist/mobile/image-interactive.jpg" alt="404" />

                </div>

                <div className="max-w-xl  p-2 text-center md:max-w-2xl md:text-left">
                    <h2 className="text-3xl md:text-5xl">Lorem ipsum dolor sit amet.</h2>
                    <p className="text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat expedita sint officia recusandae libero est debitis consequuntur voluptate consectetur dolor!</p>
                </div>
            </div>
        </section>
    )
}