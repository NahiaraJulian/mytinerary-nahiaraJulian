import { Link, useNavigate, useParams } from 'react-router-dom';
import LayoutMain from './LayoutMain';
import { getCitiesById } from '../services/citiesQueries';
import { useEffect, useState } from 'react';

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

        <section className="flex w-full flex-col gap-4 px-2">
          <img src={city.image} alt={"Image of " + city.name} className="h-96 w-full object-cover sm:w-1/2" />
          <p className="italic">Under construction</p>
          <Link to="/cities" className="self-center bg-orange-500 border-2 border-orange-600 rounded-full text-white text-center text-xl font-semibold px-3 mt-5">See more cities!</Link>
        </section>
      </main>
    </LayoutMain>
  )
}

export default DetailsCity;