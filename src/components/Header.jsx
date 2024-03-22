import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from '../redux/actions/userAction';

const Header = () => {
  const user = useSelector((store) => store.user.user)

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(signOut())
    useNavigate("/")
  }

  return (
    <header className="flex justify-between p-2">
      {/* <img src="/logoblack.png" alt="logo MyTinerary black" className="h-14" />*/}
      {user?.image ? <img src={user.image} alt="Image of user" className="w-11 h-11 rounded-full object-cover" /> : <img src="/login.png" alt="image user" className="h-10" />}
      <nav className="flex items-center justify-end gap-4">
        <Link to="/" className="text-sm text-orange-500 font-semibold border-b-2 sm:text-xl border-orange-500">Home</Link>
        <Link to="/cities" className="text-sm text-orange-500 font-semibold border-b-2 sm:text-xl border-orange-500" >Cities</Link>

        {user?.first_name ?
          <>
            <button onClick={handleClick} className="text-sm text-orange-100 font-semibold sm:text-xl bg-orange-700 rounded-full px-2 py-1">Sign Out</button>
            {/*user.image ? <img src={user.image} alt="Image of user" className="w-11 h-11 rounded-full object-cover" /> : <img src="/login.png" alt="image user" className="h-10" />*/}
          </>
          :
          <>
            <Link to="/signup" className="text-sm text-orange-100 font-semibold sm:text-xl bg-teal-500 rounded-full px-2 py-1">Sign Up</Link>
            <Link to="/signin" className="text-sm text-orange-100 font-semibold sm:text-xl bg-teal-500 rounded-full px-2 py-1">Sign In</Link>
            {/*<img src="/login.png" alt="image user" className="h-10" />*/}
          </>
        }

      </nav>
    </header>
  )
}

export default Header;