import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'

const LayoutMain = (props) => {
    return (
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <Hero banner={props.banner} />
        {props.children}
        <Footer />
      </div>
    )
}

export default LayoutMain;