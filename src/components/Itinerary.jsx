const Itinerary = ({ itinerary }) => {

  function howMany(precio) {
    if (precio == 1) {
      return ("$")
    } else if (precio == 2) {
      return ("$$")
    } else if (precio == 3) {
      return ("$$$")
    } else if (precio == 4) {
      return ("$$$$")
    } else if (precio == 5) {
      return ("$$$$$")
    }
  }

  return (
    <section className="flex w-full flex-col items-start gap-2 rounded-md border-2 border-orange-500 bg-orange-200 p-2">
      <div className="flex h-14 w-full justify-between border-b border-orange-500 pb-2">
        <div className="flex items-center gap-2">
          <img src={itinerary.guide_image} alt="guide" className="w-[50px] rounded-full" />
          <p className="text-xl"> {itinerary.guide} </p>
        </div>
        <button class="text-5xl">♥</button>
      </div>

      <h4 className="text-2xl font-semibold"> {itinerary.title} </h4>
      <p> {itinerary.description} </p>
      <p className="text-orange-600"> {itinerary.hashtags.join(" ")} </p>

      <h5 className="text-xl font-semibold"> Activities </h5>

      <div className="flex w-full flex-wrap justify-evenly gap-2 mb-2">
        <img src={itinerary.activities[0]} alt="image of activity 1" className="w-full h-72 object-cover rounded-md sm:w-[30%]" />
        <img src={itinerary.activities[1]} alt="image of activity 2" className="w-full h-72 object-cover rounded-md sm:w-[30%]" />
        <img src={itinerary.activities[2]} alt="image of activity 3" className="w-full h-72 object-cover rounded-md sm:w-[30%]" />
      </div>

      <div className="flex w-full h-14 items-center justify-evenly text-xl border-t border-orange-500">
        <p>Price: <span className="font-bold text-emerald-700"> {howMany(itinerary.price)} </span> </p>
        <p>Duration: {itinerary.duration}hs </p>
      </div>
    </section>
  )
}

export default Itinerary;