import { Link } from "react-router-dom";

const CardCity = ({city}) => {
  return (
  <article className="w-36 rounded-md bg-teal-500 pb-1 sm:w-64">
    <img  src={city.image} alt={"Image of " + city.name} className="h-40 w-full rounded-t-md object-cover sm:h-48 md:h-56 lg:h-64" />
    <footer className="flex flex-col px-2 text-white">
      <h4 className="text-xl font-semibold line-clamp-1"> {city.name} </h4>
      <p className="line-clamp-1"> {city.country} </p>
      <Link to={"/cities/" + city._id} className="text-emerald-900 self-end underline">Details</Link>
    </footer>
  </article>
  )
}

export default CardCity;