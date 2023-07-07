export default function Gallery(){

    function GalleryDivs(){

        return(
            <div>
                <div>img</div>
                <div>img</div>
                <div>img</div>
                <div>img</div>
                <div>img</div>
                <div>img</div>
                <div>img</div>
                <div>img</div>
            </div>
        )
    }



    return(
        <section>
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col lg:flex-row justify-between p-10 items-center">
                    <h2 className="font-light text-4xl tracking-wide">OUR CREATIONS</h2>
                    <button className="mt-6 lg:mt-0 border-2 border-black py-2 w-36 text-lg transition-colors hover:text-white hover:bg-black">SEE ALL</button>
                </div>

                <GalleryDivs />


            </div>

        </section>
    )
}