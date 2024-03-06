const Header = (props) => {
    return (
        <header>
          <nav>
            <a href="#" className={props.classN + " text-orange-600"} >Home</a>
            <a href="#" className="text-orange-600" >Cities</a>
            <a href="#">
              <img src="/login.png" alt="image user" className="w-14"/>
            </a>
          </nav>
        </header>
    )
}

export default Header;