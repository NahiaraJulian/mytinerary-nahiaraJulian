const Header = () => {
    return (
        <header className="flex justify-between p-2">
          <img src="/logoblack.png" alt="logo MyTinerary black" className="h-11"/>
          <nav className="flex items-center gap-5">
            <a href="#" className="text-orange-500 font-semibold border-b-2 border-orange-500 sm:text-xl">Home</a>
            <a href="#" className="text-orange-500 font-semibold border-b-2 border-orange-100 sm:text-xl sm:hover:border-orange-500" >Cities</a>
            <a href="#">
              <img src="/login.png" alt="image user" className="h-11"/>
            </a>
          </nav>
        </header>
    )
}

export default Header;