import { useState, useEffect, useRef } from "react";
import { getCities } from "../services/citiesQueries";
import ItemCarrousel from "../components/ItemCarrousel";
import LayoutMain from "./LayoutMain"

const Cities = () => {
  const [cities, SetCities] = useState([])
  const [filteredC, SetFilteredC] = useState([])
  const inputSearch = useRef(null)

  useEffect(() => {
    getCities().then((elements) => {
      console.log(elements.data)
      SetCities(elements.data)
      SetFilteredC(elements.data)
    })
  }, []);

  const handleInput = () => {
    const aux = filterByName(cities, inputSearch.current.value)
    SetFilteredC(aux)
  }

  const filterByName = (listCities, value) =>
    listCities.filter((city) => city.name.toLowerCase().startsWith(value.toLowerCase().trim()));

  return (
    <LayoutMain>
      <div className="flex justify-center items-center relative w-full h-[30vh] sm:h-[40vh] mb-5">
        <img src="/banner.png" alt="banner" className='w-full h-full object-cover' />

        <section className="absolute flex flex-wrap justify-center items-center gap-3 px-3">
          <h1 className="font-bold text-emerald-600 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Cities</h1>
        </section>
      </div>

      <main className="w-full min-h-screen flex flex-col items-center gap-5 px-1">
        <search>
          <input type="text" name="City_name" onInput={handleInput} ref={inputSearch} />
        </search>
        
        <div className="flex flex-wrap justify-center gap-1">
          {filteredC.length > 0 && filteredC.map((city) => (
            <ItemCarrousel key={city.name} city={city} />
          ))}
        </div>
      </main>
    </LayoutMain>
  )
}

export default Cities;