import { useState, useEffect, useRef } from "react";
import { getCities } from "../services/citiesQueries";
import LayoutMain from "./LayoutMain"
import CardCity from "../components/CardCity";
import { useDispatch, useSelector } from "react-redux";
import { filterByName, load } from "../redux/actions/citiesActions";


const Cities = () => {
  //guardar las cities con redux. se debe configurar un reducer para las cities
  const inputSearch = useRef(null)

  const dispatch = useDispatch()
  //useSelector trae el store completo y retorna lo que se necesita, en este caso el array de las ciudades filtradas
  const filtered = useSelector((store) => store.cities.filteredCities)

  useEffect(() => {
    getCities().then((elements) => {
      dispatch(load(elements.data)) //despachar la accion load que le manda los personajes al reducer
    })
  }, []);

  const handleInput = () => {
    dispatch(filterByName(inputSearch.current.value) )
  }

  const cityCard = filtered.map( (city) => (<CardCity key={city.name} city={city}/>));

  return (
    <LayoutMain>
      <div className="flex justify-center items-center relative w-full h-[30vh] sm:h-[40vh] mb-5">
        <img src="/banner.png" alt="banner" className='w-full h-full object-cover' />

        <section className="absolute flex flex-wrap justify-center items-center gap-3 px-3">
          <img src="/logoblack.png" alt="logo MyTinerary black" className="h-16 sm:h-32 lg:h-44" />
          <h1 className="font-bold text-orange-500 text-5xl sm:text-8xl lg:text-9xl">Cities</h1>
        </section>
      </div>

      <main className="w-full min-h-screen flex flex-col items-center gap-5 px-1">
        <search className="w-56 sm:w-96 flex justify-center items-center relative">
          <input type="text" name="City_name" placeholder="Search..." onInput={handleInput} ref={inputSearch}
            className="w-full border-2 border-orange-500 rounded-full px-2"/>
          <img src="/search.png" alt="icon search" className="w-4 h-4 absolute right-0 mr-2"/>
        </search>
        
        <div className="flex flex-wrap justify-center gap-5">
          {filtered.length > 0 ? cityCard : <h3>Oh, sorry! No city found</h3>}
        </div>
      </main>
    </LayoutMain>
  )
}

export default Cities;