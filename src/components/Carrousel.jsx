import ItemCarrousel from './ItemCarrousel'
import { cities } from '../data/data.js'
import { useState } from 'react'

const Carrousel = () => {
  const [firstCity, SetFirst] = useState(0)
  const [lastCity, SetLast] = useState(4)

  const popularCities = cities.slice(firstCity, lastCity);

  const prev = () => {
    if (firstCity == 0) {
      SetFirst(8)
      SetLast(12)
    } else if (firstCity == 8) {
      SetFirst(4)
      SetLast(8)
    } else if (firstCity == 4) {
      SetFirst(0)
      SetLast(4)
    }
  }

  const next = () => {
    if (firstCity == 0) {
      SetFirst(4)
      SetLast(8)
    } else if (firstCity == 4) {
      SetFirst(8)
      SetLast(12)
    } else if (firstCity == 8) {
      SetFirst(0)
      SetLast(4)
    }
  }

  return (
    <div className="w-full relative flex flex-wrap justify-center items-center gap-5 p-3">
      <button onClick={prev} className="flex h-7 w-7 rounded-full absolute left-0 bg-teal-500 px-2 sm:ml-2 md:ml-4">{'<'}</button>
      {popularCities.length > 0 && popularCities.map((ciudad) => <ItemCarrousel city={ciudad} key={ciudad.name} />)}
      <button onClick={next} className="flex h-7 w-7 rounded-full absolute right-0 bg-teal-500 px-2 sm:mr-2 md:mr-4">{'>'}</button>
    </div>
  )
}

export default Carrousel;