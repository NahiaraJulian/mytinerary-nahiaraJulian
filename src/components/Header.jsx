import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex justify-between p-2">
          <img src="/logoblack.png" alt="logo MyTinerary black" className="h-14"/>
          <nav className="flex items-center gap-3">
            <Link to="/" className="text-orange-500 font-semibold border-b-2 sm:text-xl border-orange-500">Home</Link>
            <Link to="/cities" className="text-orange-500 font-semibold border-b-2 sm:text-xl border-orange-500" >Cities</Link>
            <Link to="/signup" className="text-orange-100 font-semibold sm:text-xl bg-orange-500 rounded-full px-2 py-1">Sign Up</Link>
            <Link to="/signin" className="text-orange-100 font-semibold sm:text-xl bg-orange-500 rounded-full px-2 py-1">Sign In</Link>
            <img src="/login.png" alt="image user" className="h-9"/>
          </nav>
        </header>
    )
}

export default Header;