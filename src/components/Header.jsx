import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex justify-between p-2">
          <img src="/logoblack.png" alt="logo MyTinerary black" className="h-11"/>
          <nav className="flex items-center gap-5">
            <Link to="/" className="text-orange-500 font-semibold border-b-2 sm:text-xl border-orange-500">Home</Link>
            <Link to="/cities" className="text-orange-500 font-semibold border-b-2 sm:text-xl border-orange-500" >Cities</Link>
            <a href="#">
              <img src="/login.png" alt="image user" className="h-11"/>
            </a>
          </nav>
        </header>
    )
}

export default Header;