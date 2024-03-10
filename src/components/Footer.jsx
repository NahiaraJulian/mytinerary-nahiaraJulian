const Footer = () => {
    return (
      <footer className="bg-teal-500 mt-5">
        <nav className="flex justify-center gap-11 bg-emerald-600">
          <a href="#" className="text-white sm:text-xl">Home</a>
          <a href="#" className="text-white sm:text-xl">Cities</a>
        </nav>

        <div className="flex items-center h-28 relative pb-6 pl-6">
          <img src="/logowhite.png" alt="logo white MyTinerary" className="w-14 h-14 object-cover"/>
          <section className="flex flex-col pl-3">
            <h3 className="text-2xl text-white font-semibold">Contact us</h3>
            <a href="mailto:mytinerary@travels.com" className="text-xl text-white">mytinerary@travels.com</a>
          </section>
          <p className="text-emerald-800 absolute bottom-0 right-0 pr-1 pb-1 text-sm sm:text-base">Copyright © - MyTinerary - All rights reserved</p>
        </div>
      </footer>
    )
}

export default Footer;