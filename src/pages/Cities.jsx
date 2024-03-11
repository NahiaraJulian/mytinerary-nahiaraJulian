import LayoutMain from "./LayoutMain"

const Cities = () => {
    return (
        <LayoutMain>
            <div className="flex justify-center items-center relative w-full h-[30vh] sm:h-[40vh] mb-5">
                <img src="/banner.png" alt="banner" className='w-full h-full object-cover' />

                <section className="absolute flex flex-wrap justify-center items-center gap-3 px-3">
                    <h1 className="font-bold text-emerald-600 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Cities</h1>
                </section>
            </div>
            <main className="w-full min-h-screen flex flex-col items-center gap-5 px-1">
            </main>
        </LayoutMain>
    )
}

export default Cities;