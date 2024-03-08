const Hero = (props) => {
    return (
      <div className="flex justify-center items-center relative w-full h-[60vh] sm:h-[80vh] mb-5">
        <img src={props.banner} alt="banner" className='w-full h-full object-cover'/>

        <section className="absolute flex flex-wrap justify-center items-center gap-3 px-3">
          <img src="/logo.png" alt="Logo My Tinerary" className='h-14 sm:h-16 md:h-20 lg:h-32'/>
          <h1 className="font-bold text-emerald-600 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">MyTinerary</h1>
          <p className="text-orange-500 font-semibold pt-7 text-sm w-9/12 text-center sm:text-lg md:text-2xl">Find your perfect trip, designed by insiders who know and love their cities!</p>
        </section>
      </div>
    )
}

export default Hero;