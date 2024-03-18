import { Link, useNavigate, useParams } from 'react-router-dom';
import LayoutMain from './LayoutMain';
import { getCitiesById } from '../services/citiesQueries';
import { useEffect, useState } from 'react';
import Itinerary from '../components/Itinerary';

export const DetailsCity = () => {
  const params = useParams()
  const [city, setCity] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getCitiesById(params.id)
      .then((element) => {
        if (element.data) {
          setCity(element.data)
        } else {
          alert("Sorry, this city is not available!")
          navigate("/cities")
        }
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(city);
  console.log(city.itineraries);
  //const itinerarios = city.itineraries
  //console.log(itinerarios.map((itinerario) => itinerario.duration ))

  if (loading) {
    return (
      <LayoutMain>
        <h2 className="w-full min-h-screen flex flex-col items-center gap-5 px-1">Loading...</h2>
      </LayoutMain>
    )
  }

  return (
    <LayoutMain>
      <main className="flex min-h-screen w-full flex-col items-center gap-5">
        <div className="flex w-full items-center justify-between bg-teal-500 p-2 text-center text-white">
          <h2 className="text-3xl font-semibold"> {city.name} </h2>
          <h3 className="text-2xl font-light"> {city.country} </h3>
        </div>

        <section className="flex w-full flex-wrap gap-3 px-3">
          <img src={city.image} alt={"Image of " + city.name} className="h-72 w-full object-cover rounded-md sm:w-1/2 sm:h-[250px] " />
          <div className="flex flex-col gap-3 sm:w-[48%] pt-2">
            <p> <span className="font-semibold text-orange-600">Currency:</span> {city.currency} </p>
            <p> <span className="font-semibold text-orange-600">Language:</span> {city.language} </p>
            <p> {city.description} </p>
          </div>
          {/*
          <p className="italic">Under construction</p>
          <Link to="/cities" className="self-center bg-orange-500 border-2 border-orange-600 rounded-full text-white text-center text-xl font-semibold px-3 mt-5">See more cities!</Link>
           */}
        </section>

        <div className="flex flex-col gap-4 w-full px-3">
          <h3 className="text-3xl text-center font-semibold text-emerald-600" >Itineraries</h3>
          {city.itineraries.length > 0 ?
            <>
              <Itinerary itinerary={city.itineraries[0]} />
              <Itinerary itinerary={city.itineraries[1]} />
            </>
            : 
            <>
              <p className='text-center' >There are no itineraries available here yet, but you can search in another city</p>
              <Link to="/cities" className="self-center bg-orange-500 border-2 border-orange-600 rounded-full text-white text-center text-xl font-semibold px-3 mt-5">See more cities!</Link>
            </>
            }

        </div>
      </main>
    </LayoutMain>
  )
}

export default DetailsCity;