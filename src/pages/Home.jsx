import LayoutMain from './LayoutMain.jsx'

const Home = () => {
  return (
    <LayoutMain banner="/bannerhero.png" classN="border-b border-orange-700" >      
      <main className="w-full min-h-screen flex flex-col items-center gap-5 px-1">
        <p className="px-2">
          Our app will help you find the perfect path for you next trip. With an easy-to-use interface
          and a host of itinerary options, planning your next trip has been easier. Let's travel and
          discover new and wonderful places with incredible activities!
        </p>

        <button className="w-2/6 bg-teal-500 border-2 border-emerald-600 rounded-full text-white text-xl font-semibold p-1">View more</button>
        
        <section className="flex flex-wrap justify-center gap-5 mt-1">
          <h2 className="w-full text-center text-2xl font-semibold text-emerald-600 pt-4">Popular MyTineraries</h2>
          {/* div carrousel */}
        </section>
      </main>
    </LayoutMain>
  )
}

export default Home;