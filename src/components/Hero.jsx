const Hero = (props) => {
    return (
      <div>
        <img src={props.banner} alt="banner travel" className='w-full h-screen object-cover'/>
        <img src="/logo.png" alt="Logo My Tinerary" className='w-14 h-14'/>
        <h1>My Tinerary</h1>
        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
      </div>
    )
}

export default Hero;