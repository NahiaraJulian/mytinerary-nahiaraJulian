import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


const LayoutMain = (props) => {
    return (
      <div className="w-full min-h-screen flex flex-col bg-orange-100">
        <Header />        
        {props.children}
        <Footer />
      </div>
    )
}

export default LayoutMain;